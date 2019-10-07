import { Expose } from 'class-transformer';
import { Colors } from '../core/enums/colors.enum';

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

    public get manaColorsList (): string[] {
        return this.colorsList.map((color) => {
            switch (color) {
                case Colors.WHITE: {
                    return 'mana-white';
                }
                case Colors.BLUE: {
                    return 'mana-blue';
                }
                case Colors.BLACK: {
                    return 'mana-black';
                }
                case Colors.RED: {
                    return 'mana-red';
                }
                case Colors.GREEN: {
                    return 'mana-green';
                }
            }
        });
    }
}
