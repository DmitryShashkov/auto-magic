import { Expose } from 'class-transformer';

export class TokenModel {
    @Expose() public id: number;

    @Expose() public token: string;

    @Expose() public userId: number;
}
