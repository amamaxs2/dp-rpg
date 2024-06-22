import { HttpException } from '@nestjs/common';
export declare class CreateFailedHttpException extends HttpException {
    constructor(message: string);
}
