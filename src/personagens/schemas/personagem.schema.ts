import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PersonagemDocument = HydratedDocument<Personagem>;

class Classe {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string;
}

class Feat {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], default: [] })
  prerequisites: string[];
}

class Alignment {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string;
}

class Item {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

class Spell {
  @Prop({ required: true })
  index: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  level: number;

  @Prop({ required: true })
  url: string;
}

@Schema()
export class Personagem {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  level: number;

  @Prop({ type: Classe, required: true })
  classes: Classe;

  @Prop({ type: [Spell], default: [] })
  spells: Spell[];

  @Prop({ type: [Item], default: [] })
  equipment: Item[];

  @Prop({ type: [Feat], default: [] })
  feats: Feat[];

  @Prop({ type: Alignment, required: true })
  alignment: Alignment;

  @Prop({ type: [String], default: [] })
  abilities: string[];
}

export const PersonagemSchema = SchemaFactory.createForClass(Personagem);
