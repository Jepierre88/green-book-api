import { Schema, SchemaFactory, Prop, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import User from "../interfaces/User.interface";

export type PublicationDocument = HydratedDocument<Publication>

@Schema({ timestamps: { createdAt: true } })
export class Publication {
    @Prop(raw({
        username: { type: String },
        picture: { type: String }
    }))
    user: Record<string, any>;
    @Prop()
    publicationImageUrl: string
    @Prop({ required: false })
    description: string
    @Prop({ required: false, default: 0 })
    reactions: number;
}

export const PublicationSchema = SchemaFactory.createForClass(Publication)

