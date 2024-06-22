import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonagemDocument = HydratedDocument<Personagem>;

@Schema()
export class Personagem {
  @Prop()
  name: string;

  @Prop()
  classes: {name: String, url: String};

  @Prop()
  spells: [];

  @Prop()
  equipment: string;
  
  @Prop()
  feats: {name: String, prerequisites: []};
  
  @Prop()
  alignment: {name: String, url: String};

  @Prop()
  abilities: [];

}

export const PersonagemSchema = SchemaFactory.createForClass(Personagem);
