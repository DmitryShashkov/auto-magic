import { serialize, deserialize } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";


export class Storage<T> {
    private static readonly APP_PREFIX = 'am';

    private readonly key: string;

    constructor (
        storageKey: string,
        private readonly classType: ClassType<T>,
    ) {
        this.key = `${Storage.APP_PREFIX}:${storageKey}`;
    }

    public save (data: T): void {
        if (!data) {
            return localStorage.removeItem(this.key);
        }

        localStorage.setItem(this.key, serialize(data));
    }

    public restore (): T {
        const data: string = localStorage.getItem(this.key);

        if (!data) { return null; }

        return deserialize(this.classType, data);
    }

    public clear (): void {
        localStorage.removeItem(this.key);
    }
}
