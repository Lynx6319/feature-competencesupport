import {Client, Require2FA} from "../src/";
import readline from "node:readline";
import {AuthentificationCredentialWithToken} from "../src/types/AuthentificationCredential";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(async () => {
    const client = new Client();

    let tokens: AuthentificationCredentialWithToken | null = null;

    const username = process.env.USERNAME
    const password = process.env.PASSWORD

    try {
        tokens = await client.auth.loginUsername(username, password);
    } catch (e) {
        if (e instanceof Require2FA) {
            const questions = await client.auth.get2FAQuestion(e.token);

            console.log(questions.question + "\n");

            for (const [index, proposition] of questions.propositions.entries()) {
                console.log(`${index} - ${proposition}`);
            }

            let answer: string | undefined = undefined;
            let skip = false;
            while (answer === undefined) {
                rl.question('$> ', response => {
                    if (isNaN(Number(response)) || Number(response) < 0 || Number(response) >= questions.propositions.length) {
                        console.log("Invalid answer.");
                        skip = true;
                        return;
                    }
                    answer = response;
                    rl.close();
                });
                while (answer === undefined && !skip) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
                skip = false;
            }

            let keys2FA = await client.auth.send2FAQuestion(questions.propositions[Number(answer)], e.token);

            tokens = await client.auth.loginUsername(username, password, keys2FA.cn, keys2FA.cv);
        } else {
            console.error(e);
        }
    } finally {
        if (tokens) {
            client.auth.setAccount(0);
            const account = client.auth.getAccount();
            console.log(`Hello, ${account.prenom} !`);
        } else {
            console.error("Failed to authenticate");
        }
    }

    process.exit(0);
})();