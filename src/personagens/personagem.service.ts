import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
//import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './schemas/personagem.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';

@Injectable()
export class PersonagemService {
  constructor(@InjectModel(Personagem.name) private personagemModel: Model<Personagem>) {}

  // create(createPersonagemDto: CreatePersonagemDto) {
  //   const createdPersonagem = this.personagemModel.create(createPersonagemDto);
  //   return createdPersonagem;
  // }

  // findAll() {
  //   return this.personagemModel.find();
  // }

  // findById(id: string) {
  //   return this.personagemModel.findById(id);
  // }

  // // update(id: string, updatePersonagemDto: UpdatePersonagemDto) {
  // //   return `This action updates a #${id} personagem`;
  // // }

  // remove(id: string) {
  //   return this.personagemModel.findByIdAndDelete(id);
  // }

  async create(createPersonagemDto: CreatePersonagemDto): Promise<Personagem> {
    const createdPersonagem = new this.personagemModel(createPersonagemDto);
    return createdPersonagem.save();
  }

  async findAll(): Promise<Personagem[]> {
    return this.personagemModel.find().exec();
  }

  async findById(id: string): Promise<Personagem> {
    const personagem = await this.personagemModel.findById(id).exec();
    if (!personagem) {
      throw new NotFoundException(`Personagem with id ${id} not found`);
    }
    return personagem;
  }

  async update(id: string, updatePersonagemDto: UpdatePersonagemDto): Promise<Personagem> {
    const updatedPersonagem = await this.personagemModel
      .findByIdAndUpdate(id, updatePersonagemDto, { new: true })
      .exec();
    if (!updatedPersonagem) {
      throw new NotFoundException(`Personagem with id ${id} not found`);
    }
    return updatedPersonagem;
  }

  async remove(id: string): Promise<Personagem> {
    const deletedPersonagem = await this.personagemModel.findByIdAndDelete(id).exec();
    if (!deletedPersonagem) {
      throw new NotFoundException(`Personagem with id ${id} not found`);
    }
    return deletedPersonagem;
  }

}
