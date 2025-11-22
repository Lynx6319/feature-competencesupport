import {Modules} from "./Modules";
import {DOWNLOADER_URL} from "../rest/endpoints";

export class DownloaderModules extends Modules {
    public async getStream(fileId: number, fileType: string): Promise<ReadableStream<Uint8Array<ArrayBuffer>> | null> {
        this.checkToken();

        return await this.restManager.getStream(
            DOWNLOADER_URL(fileId, fileType),
            { forceDownload: 0 },
            {
                "X-Token": this.credentials.token!
            }
        );
    }
}