/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Personagem } from './schemas/personagem.schema';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
export declare class PersonagemService {
    private personagemModel;
    private readonly httpService;
    private readonly apiUrl;
    constructor(personagemModel: Model<Personagem>, httpService: HttpService);
    create(createPersonagemDto: CreatePersonagemDto): Promise<Personagem>;
    findAll(): Promise<Personagem[]>;
    findById(id: string): Promise<Personagem>;
    update(id: string, updatePersonagemDto: UpdatePersonagemDto): Promise<Personagem>;
    remove(id: string): Promise<Personagem>;
    createRandomCharacter(level: number): Promise<Personagem>;
    private getRandomClass;
    private getRandomSpells;
    private getRandomEquipment;
    private getRandomAlignment;
    private getRandomFeats;
    private getRandomAbilities;
    private getRandomItems;
}
