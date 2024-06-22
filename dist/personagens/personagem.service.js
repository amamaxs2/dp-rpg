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
let PersonagemService = class PersonagemService {
    constructor(personagemModel) {
        this.personagemModel = personagemModel;
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
};
exports.PersonagemService = PersonagemService;
exports.PersonagemService = PersonagemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(personagem_schema_1.Personagem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PersonagemService);
//# sourceMappingURL=personagem.service.js.map