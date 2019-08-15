import { API_URL } from "../../../../src/environments/environment";

export class ServiceBase {
    constructor (
        private readonly endpoint: string,
    ) { }

    protected get apiEndpoint (): string {
        return [API_URL, this.endpoint].join('');
    }
}
