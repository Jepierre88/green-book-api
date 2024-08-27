import { IsInt, IsOptional, IsString, IsUrl } from "class-validator";
import User from "../interfaces/student.interface";

export class CreateStudentDto {
    Nombre: string
    @IsInt()
    Edad: number;
    DocumentoIdentidad: string
}

export class UpdateStudentDto {
    @IsOptional()
    Nombre: string
    @IsInt()
    @IsOptional()
    Edad: number;
    DocumentoIdentidad: string
}