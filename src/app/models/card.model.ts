import { Expose, Type } from 'class-transformer';
import { RarityModel } from './rarity.model';
import { ArtistModel } from './artist.model';
import { Colors } from '../core/enums/colors.enum';

export class CardModel {
    @Expose() public id: number;

    @Expose() public oracleId: string;

    @Expose() public name: string;

    @Expose() public artCrop: string;

    @Expose() public manaCost: string;

    @Expose() public cmc: number;

    @Expose() public typeLine: string;

    @Expose() public colors: string;

    @Expose() public text: string;

    @Expose() public flavorText: string;

    @Expose() public edhrecRank: number;

    @Expose() public power: string;

    @Expose() public toughness: string;

    @Type(() => RarityModel)
    @Expose() public rarity: RarityModel;

    @Type(() => ArtistModel)
    @Expose() public artist: ArtistModel;

    public get isColorless (): boolean {
        return !this.colors.length;
    }
    public get isWhite (): boolean {
        return this.colors.includes(Colors.WHITE);
    }
    public get isBlue (): boolean {
        return this.colors.includes(Colors.BLUE);
    }
    public get isBlack (): boolean {
        return this.colors.includes(Colors.BLACK);
    }
    public get isRed (): boolean {
        return this.colors.includes(Colors.RED);
    }
    public get isGreen (): boolean {
        return this.colors.includes(Colors.GREEN);
    }
    public get isMultiColored (): boolean {
        return this.colors.length > 2;
    }
}
