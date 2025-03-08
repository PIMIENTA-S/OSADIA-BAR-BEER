import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProviderDocument = Provider & Document;

@Schema()
export class Provider extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  contact: string;

  @Prop()
  phone: string;

  @Prop([String])
  products: string[];
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);
