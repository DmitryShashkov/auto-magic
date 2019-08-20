export interface ListResponse<T> {
    readonly count: number;
    readonly rows: T[];
}
