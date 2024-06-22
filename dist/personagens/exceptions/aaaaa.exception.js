"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpException = void 0;
const common_1 = require("@nestjs/common");
class CustomHttpException extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.CustomHttpException = CustomHttpException;
//# sourceMappingURL=aaaaa.exception.js.map