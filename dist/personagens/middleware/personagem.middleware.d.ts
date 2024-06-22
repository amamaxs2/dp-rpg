import { NestMiddleware } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request, Response, NextFunction } from 'express';
export declare class PersonagemMiddleware implements NestMiddleware {
    private readonly httpService;
    private readonly apiUrl;
    constructor(httpService: HttpService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
    private validateResource;
}
