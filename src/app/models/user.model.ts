import { Expose, Type } from 'class-transformer';
import { TokenModel } from './token.model';

export class UserModel {
    @Expose() public id: number;

    @Expose() public profilePicture: string;

    @Type(() => Date)
    @Expose() public createdAt: Date;

    @Expose() public email: string;

    @Expose() public name: string;

    @Type(() => TokenModel)
    @Expose() public tokens: TokenModel[];
}
