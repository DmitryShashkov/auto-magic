import { Expose } from 'class-transformer';

export class ArtistModel {
    @Expose() public id: number;
    @Expose() public name: string;
}
