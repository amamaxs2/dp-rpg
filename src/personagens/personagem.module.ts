import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Personagem, PersonagemSchema } from './schemas/personagem.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Personagem.name, schema: PersonagemSchema }]),
    HttpModule
  ],
  controllers: [PersonagemController],
  providers: [PersonagemService],
})
export class PersonagemModule { }
