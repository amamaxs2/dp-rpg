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
exports.PersonagemController = void 0;
const common_1 = require("@nestjs/common");
const personagem_service_1 = require("./personagem.service");
const create_personagem_dto_1 = require("./dto/create-personagem.dto");
const auth_guard_1 = require("../auth/auth.guard");
let PersonagemController = class PersonagemController {
    constructor(personagensService) {
        this.personagensService = personagensService;
    }
    async create(createPersonagemDto) {
        try {
            return await this.personagensService.create(createPersonagemDto);
        }
        catch (error) {
            throw new common_1.HttpException('Bad Request', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            return await this.personagensService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('Error fetching data', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            return await this.personagensService.findById(id);
        }
        catch (error) {
            throw new common_1.HttpException('Personagem not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async remove(id) {
        try {
            return await this.personagensService.remove(id);
        }
        catch (error) {
            throw new common_1.HttpException('Personagem not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.PersonagemController = PersonagemController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_personagem_dto_1.CreatePersonagemDto]),
    __metadata("design:returntype", Promise)
], PersonagemController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonagemController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonagemController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonagemController.prototype, "remove", null);
exports.PersonagemController = PersonagemController = __decorate([
    (0, common_1.Controller)('personagem'),
    __metadata("design:paramtypes", [personagem_service_1.PersonagemService])
], PersonagemController);
//# sourceMappingURL=personagem.controller.js.map