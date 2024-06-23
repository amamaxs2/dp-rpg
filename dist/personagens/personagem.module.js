"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonagemModule = void 0;
const common_1 = require("@nestjs/common");
const personagem_service_1 = require("./personagem.service");
const personagem_controller_1 = require("./personagem.controller");
const mongoose_1 = require("@nestjs/mongoose");
const personagem_schema_1 = require("./schemas/personagem.schema");
const axios_1 = require("@nestjs/axios");
let PersonagemModule = class PersonagemModule {
};
exports.PersonagemModule = PersonagemModule;
exports.PersonagemModule = PersonagemModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: personagem_schema_1.Personagem.name, schema: personagem_schema_1.PersonagemSchema }]),
            axios_1.HttpModule
        ],
        controllers: [personagem_controller_1.PersonagemController],
        providers: [personagem_service_1.PersonagemService],
    })
], PersonagemModule);
//# sourceMappingURL=personagem.module.js.map