import { IsInt, IsOptional, IsString, IsUrl } from "class-validator";
import User from "../interfaces/User.interface";

export class createPublicationDto {
    user: User
    @IsUrl(undefined, { message: "Please give a valid URL" })
    @IsOptional()
    publicationImageUrl: string;
    @IsString({ message: "Please give a valid publication description" })
    description: string;
    @IsInt()
    @IsOptional()
    reactions: number = 0;
}