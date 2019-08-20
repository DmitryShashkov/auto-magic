import { Expose } from 'class-transformer';

export class RarityModel {
    @Expose() public id: number;
    @Expose() public title: string;
}
