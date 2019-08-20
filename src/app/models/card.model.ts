import { Expose, Type } from 'class-transformer';
import { RarityModel } from './rarity.model';
import { ArtistModel } from './artist.model';

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
}
