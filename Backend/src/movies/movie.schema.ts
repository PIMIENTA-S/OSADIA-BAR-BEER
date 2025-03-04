import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    producer: string;

    @Prop()
    time: number;

    @Prop()
    image: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
