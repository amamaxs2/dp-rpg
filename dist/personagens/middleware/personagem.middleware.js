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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonagemMiddleware = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let PersonagemMiddleware = class PersonagemMiddleware {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiUrl = 'https://www.dnd5eapi.co/api';
    }
    async use(req, res, next) {
        const { level, classes, spells, equipment, alignment, feats } = req.body;
        try {
            await this.validateResource(`${this.apiUrl}/classes/${classes.name.toLowerCase()}`, 'Class');
            for (const spell of spells) {
                await this.validateSpell(spell, level);
            }
            for (const item of equipment) {
                await this.validateResource(`${this.apiUrl}/equipment/${item.url.split("/")[3].toLowerCase()}`, 'Equipment');
            }
            await this.validateResource(`${this.apiUrl}/alignments/${alignment.name.toLowerCase()}`, 'Alignment');
            for (const feat of feats) {
                await this.validateFeat(feat);
            }
            next();
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async validateResource(url, resourceName) {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            if (!response.data) {
                throw new Error(`${resourceName} not found.`);
            }
        }
        catch (error) {
            throw new Error(`${resourceName} not found.`);
        }
    }
    async validateSpell(spell, level) {
        try {
            const url = `${this.apiUrl}/spells/${spell.index}`;
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            if (!response.data) {
                throw new Error(`Spell ${spell.name} not found.`);
            }
            const spellData = response.data;
            if (spellData.level > level) {
                throw new Error(`Spell ${spell.name} requires a higher level.`);
            }
        }
        catch (error) {
            throw new Error(`Spell ${spell.name} validation failed: ${error.message}`);
        }
    }
    async validateFeat(feat) {
        try {
            const url = `${this.apiUrl}/feats/${feat.name.toLowerCase()}`;
            console.log(url);
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            if (!response.data) {
                throw new Error(`Feat ${feat.name} not found.`);
            }
            const featData = response.data;
        }
        catch (error) {
            throw new Error(`Feat ${feat.name} validation failed: ${error.message}`);
        }
    }
};
exports.PersonagemMiddleware = PersonagemMiddleware;
exports.PersonagemMiddleware = PersonagemMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], PersonagemMiddleware);
//# sourceMappingURL=personagem.middleware.js.map