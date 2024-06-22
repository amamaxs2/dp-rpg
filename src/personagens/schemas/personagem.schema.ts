import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonagemDocument = HydratedDocument<Personagem>;

class Classe {
  @Prop()
  name: string;

  @Prop()
  url: string;
}

class Feat {
  @Prop()
  name: string;

  @Prop({ type: [String] })
  prerequisites: string[];
}

class Alignment {
  @Prop()
  name: string;

  @Prop()
  url: string;
}

@Schema()
export class Personagem {
  @Prop()
  name: string;

  @Prop()
  level: number;

  @Prop({ type: Classe })
  classes: Classe;

  @Prop({ type: [String] })
  spells: string[];

  @Prop()
  equipment: string;

  @Prop({ type: Feat })
  feats: Feat;

  @Prop({ type: Alignment })
  alignment: Alignment;

  @Prop({ type: [String] })
  abilities: string[];
}

export const PersonagemSchema = SchemaFactory.createForClass(Personagem);
