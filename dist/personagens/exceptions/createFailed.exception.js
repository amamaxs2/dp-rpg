"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFailedHttpException = void 0;
const common_1 = require("@nestjs/common");
class CreateFailedHttpException extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.CreateFailedHttpException = CreateFailedHttpException;
//# sourceMappingURL=createFailed.exception.js.map