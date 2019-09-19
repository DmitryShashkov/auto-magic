import { Expose, Type } from 'class-transformer';
import { UserModel } from './user.model';

export class BattleModel {
    @Expose() public id: number;

    @Expose() public status: number;

    @Expose() public isWon: boolean;

    @Expose() public currentStage: number;

    @Expose() public currentGold: number;

    @Expose() public availableUnits: any[];

    @Expose() public selectedUnits: any[];

    @Expose() public nextEnemyUnits: any[];

    @Expose() public userId: number;

    @Type(() => UserModel)
    @Expose() public user: Partial<UserModel>;
}
