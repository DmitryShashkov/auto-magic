import { Expose } from 'class-transformer';

export class UnitModel {
    @Expose() public id: string;
    @Expose() public name: string;
    @Expose() public image: string;

    @Expose() public power: number;
    @Expose() public toughness: number;
    @Expose() public initiative: number;

    @Expose() public level: number;
    @Expose() public levelUpCost: number;

    @Expose() public goldCost: number;

    @Expose() public colorsList: string[];
    @Expose() public typesList: string[];
}
