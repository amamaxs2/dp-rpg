"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const mongoose_1 = require("@nestjs/mongoose");
const personagem_module_1 = require("./personagens/personagem.module");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const personagem_middleware_1 = require("./personagens/middleware/personagem.middleware");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./users/user.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes('books');
        consumer
            .apply(personagem_middleware_1.PersonagemMiddleware)
            .forRoutes({ path: 'personagem', method: common_1.RequestMethod.POST });
        consumer
            .apply(personagem_middleware_1.PersonagemMiddleware)
            .forRoutes({ path: 'personagem', method: common_1.RequestMethod.PATCH });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            axios_1.HttpModule,
            mongoose_1.MongooseModule.forRoot('mongodb://0.0.0.0/dp-rpg'),
            personagem_module_1.PersonagemModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map