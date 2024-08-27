import { Schema, SchemaFactory, Prop, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StudentDocument = HydratedDocument<Student>

@Schema({ timestamps: { createdAt: true } })
export class Student {
    @Prop()
    Nombre: string;
    @Prop()
    Edad: number
    @Prop({
        unique: true
    })
    DocumentoIdentidad: string;

}

export const StudentSchema = SchemaFactory.createForClass(Student)

