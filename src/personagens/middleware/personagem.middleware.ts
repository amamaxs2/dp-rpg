import { Injectable, NestMiddleware } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request, Response, NextFunction } from 'express';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PersonagemMiddleware implements NestMiddleware {
  private readonly apiUrl = 'https://www.dnd5eapi.co/api';

  constructor(private readonly httpService: HttpService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { classes, spells, equipment, alignment } = req.body;

    try {
      await this.validateResource(`${this.apiUrl}/classes/${classes.name}`, 'Class');

      for (const spell of spells) {
        await this.validateResource(`${this.apiUrl}/spells/${spell.index}`, 'Spell');
      }

      for (const item of equipment) {
        await this.validateResource(`${this.apiUrl}/equipment/${item.index}`, 'Equipment');
      }

      await this.validateResource(`${this.apiUrl}/alignments/${alignment.name.toLowerCase()}`, 'Alignment');

      next();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  private async validateResource(url: string, resourceName: string) {
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      if (!response.data) {
        throw new Error(`${resourceName} not found.`);
      }
    } catch (error) {
      throw new Error(`${resourceName} not found.`);
    }
  }
}
