"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonagemService = void 0;
const common_1 = require("@nestjs/common");
const personagem_schema_1 = require("./schemas/personagem.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let PersonagemService = class PersonagemService {
    constructor(personagemModel, httpService) {
        this.personagemModel = personagemModel;
        this.httpService = httpService;
        this.apiUrl = 'https://www.dnd5eapi.co/api';
    }
    async create(createPersonagemDto) {
        const createdPersonagem = new this.personagemModel(createPersonagemDto);
        return createdPersonagem.save();
    }
    async findAll() {
        return this.personagemModel.find().exec();
    }
    async findById(id) {
        const personagem = await this.personagemModel.findById(id).exec();
        if (!personagem) {
            throw new common_1.NotFoundException(`Personagem with id ${id} not found`);
        }
        return personagem;
    }
    async update(id, updatePersonagemDto) {
        const updatedPersonagem = await this.personagemModel
            .findByIdAndUpdate(id, updatePersonagemDto, { new: true })
            .exec();
        if (!updatedPersonagem) {
            throw new common_1.NotFoundException(`Personagem with id ${id} not found`);
        }
        return updatedPersonagem;
    }
    async remove(id) {
        const deletedPersonagem = await this.personagemModel.findByIdAndDelete(id).exec();
        if (!deletedPersonagem) {
            throw new common_1.NotFoundException(`Personagem with id ${id} not found`);
        }
        return deletedPersonagem;
    }
    async createRandomCharacter(level) {
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
    async getRandomClass() {
        const url = `${this.apiUrl}/classes`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const classes = response.data.results;
        const randomClass = classes[Math.floor(Math.random() * classes.length)];
        return {
            name: randomClass.name,
            url: randomClass.url,
        };
    }
    async getRandomSpells(level) {
        const url = `${this.apiUrl}/spells`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const spells = response.data.results.filter(spell => spell.level <= level);
        const randomSpells = this.getRandomItems(spells, 3);
        return randomSpells.map(spell => spell.name);
    }
    async getRandomEquipment() {
        const url = `${this.apiUrl}/equipment`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const equipment = response.data.results;
        const randomEquipment = this.getRandomItems(equipment, 3);
        return randomEquipment.map(item => item.name);
    }
    async getRandomAlignment() {
        const url = `${this.apiUrl}/alignments`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const alignments = response.data.results;
        const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
        return {
            name: randomAlignment.name,
            url: randomAlignment.url,
        };
    }
    async getRandomFeats(level) {
        const url = `${this.apiUrl}/features`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const feats = response.data.results.filter(feat => !feat.level || feat.level <= level);
        const randomFeats = this.getRandomItems(feats, 2);
        return randomFeats.map(feat => ({
            name: feat.name,
            prerequisites: feat.prerequisites || [],
        }));
    }
    async getRandomAbilities() {
        const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
        return this.getRandomItems(abilities, 3);
    }
    getRandomItems(items, count) {
        const shuffled = items.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
};
exports.PersonagemService = PersonagemService;
exports.PersonagemService = PersonagemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(personagem_schema_1.Personagem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        axios_1.HttpService])
], PersonagemService);
//# sourceMappingURL=personagem.service.js.map