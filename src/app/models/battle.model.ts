import { Expose, Type } from 'class-transformer';
import { UserModel } from './user.model';
import { UnitModel } from './unit.model';

export class BattleModel {
    @Expose() public id: number;

    @Expose() public status: number;

    @Expose() public isWon: boolean;

    @Expose() public currentStage: number;

    @Expose() public currentGold: number;

    @Type(() => UnitModel)
    @Expose() public availableUnits: UnitModel[];

    @Expose() public selectedUnits: any[];

    @Type(() => UnitModel)
    @Expose() public nextEnemyUnits: UnitModel[];

    @Expose() public userId: number;

    @Type(() => UserModel)
    @Expose() public user: Partial<UserModel>;

    public get titleImage (): string {
        return this.nextEnemyUnits[0]
            && this.nextEnemyUnits[0].image;
    }
}
