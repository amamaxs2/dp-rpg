import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './schemas/personagem.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PersonagemService {
  private readonly apiUrl = 'https://www.dnd5eapi.co/api';

  constructor(
    @InjectModel(Personagem.name) private personagemModel: Model<Personagem>,
    private readonly httpService: HttpService
  ) {}

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

  async createRandomCharacter(level: number): Promise<Personagem> {
    const character = {
      name: `Random Character ${Math.floor(Math.random() * 1000)}`,
      level,
      classes: await this.getRandomClass(),
      spells: await this.getRandomSpells(level),
      equipment: await this.getRandomEquipment(),
      alignment: await this.getRandomAlignment(),
      feats: await this.getRandomFeats(level),
      abilities: await this.getRandomAbilities(),
    };

    const createdPersonagem = new this.personagemModel(character);
    return createdPersonagem.save();
  }

  private async getRandomClass() {
    const url = `${this.apiUrl}/classes`;
    const response = await firstValueFrom(this.httpService.get(url));
    const classes = response.data.results;
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    return {
      name: randomClass.name,
      url: randomClass.url,
    };
  }

  private async getRandomSpells(level: number) {
    const url = `${this.apiUrl}/spells`;
    const response = await firstValueFrom(this.httpService.get(url));
    const spells = response.data.results.filter(spell => spell.level <= level);
    const randomSpells:any = this.getRandomItems(spells, 3);
    return randomSpells.map(spell => spell.name);
  }

  private async getRandomEquipment() {
    const url = `${this.apiUrl}/equipment`;
    const response = await firstValueFrom(this.httpService.get(url));
    const equipment = response.data.results;
    const randomEquipment:any = this.getRandomItems(equipment, 3);
    return randomEquipment.map(item => item.name);
  }

  private async getRandomAlignment() {
    const url = `${this.apiUrl}/alignments`;
    const response = await firstValueFrom(this.httpService.get(url));
    const alignments = response.data.results;
    const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
    return {
      name: randomAlignment.name,
      url: randomAlignment.url,
    };
  }

  private async getRandomFeats(level: number) {
    const url = `${this.apiUrl}/features`;
    const response = await firstValueFrom(this.httpService.get(url));
    const feats = response.data.results.filter(feat => !feat.level || feat.level <= level);
    const randomFeats:any = this.getRandomItems(feats, 2);
    return randomFeats.map(feat => ({
      name: feat.name,
      prerequisites: feat.prerequisites || [],
    }));
  }

  private async getRandomAbilities() {
    const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    return this.getRandomItems(abilities, 3);
  }

  private getRandomItems<T>(items: T[], count: number): T[] {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
