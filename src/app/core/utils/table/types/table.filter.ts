import { IndexedObject } from '../../../types/indexed-object';

export interface TableFilter extends IndexedObject<any> {
    limit: number;
    offset: number;
}
