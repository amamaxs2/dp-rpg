import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  name: string;

  @Prop()
  classes: {name: String, url: String};

  @Prop()
  spells: [];

  @Prop()
  items: string;
  
  @Prop()
  feats: {name: String, prerequisites: []};
  
  @Prop()
  alignment: {name: String, url: String};

  @Prop()
  abilities: [];


}

export const BookSchema = SchemaFactory.createForClass(Book);
