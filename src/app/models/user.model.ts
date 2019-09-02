import { Expose, Type } from 'class-transformer';

export class UserModel {
    @Expose() public id: number;

    @Expose() public profilePicture: string;

    @Type(() => Date)
    @Expose() public createdAt: Date;

    @Expose() public email: string;

    @Expose() public name: string;

    @Expose() public currentToken: string;
}
