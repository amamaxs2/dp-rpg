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
exports.PersonagemSchema = exports.Personagem = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class Classe {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Classe.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Classe.prototype, "url", void 0);
class Feat {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Feat.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Feat.prototype, "prerequisites", void 0);
class Alignment {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Alignment.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Alignment.prototype, "url", void 0);
class Item {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
class Spell {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Spell.prototype, "index", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Spell.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Spell.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Spell.prototype, "url", void 0);
let Personagem = class Personagem {
};
exports.Personagem = Personagem;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Personagem.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Personagem.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Classe, required: true }),
    __metadata("design:type", Classe)
], Personagem.prototype, "classes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Spell], default: [] }),
    __metadata("design:type", Array)
], Personagem.prototype, "spells", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Item], default: [] }),
    __metadata("design:type", Array)
], Personagem.prototype, "equipment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Feat], default: [] }),
    __metadata("design:type", Array)
], Personagem.prototype, "feats", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Alignment, required: true }),
    __metadata("design:type", Alignment)
], Personagem.prototype, "alignment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Personagem.prototype, "abilities", void 0);
exports.Personagem = Personagem = __decorate([
    (0, mongoose_1.Schema)()
], Personagem);
exports.PersonagemSchema = mongoose_1.SchemaFactory.createForClass(Personagem);
//# sourceMappingURL=personagem.schema.js.map