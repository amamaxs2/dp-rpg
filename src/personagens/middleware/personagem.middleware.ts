import { Injectable, NestMiddleware } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request, Response, NextFunction } from 'express';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PersonagemMiddleware implements NestMiddleware {
  private readonly apiUrl = 'https://www.dnd5eapi.co/api';

  constructor(private readonly httpService: HttpService) {}

  async use(req: Request, res: Response, next: NextFunction) {
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

  private async validateSpell(spell: any, level: number) {
    try {
      const url = `${this.apiUrl}/spells/${spell.index}`;
      const response = await firstValueFrom(this.httpService.get(url));
      if (!response.data) {
        throw new Error(`Spell ${spell.name} not found.`);
      }
      const spellData = response.data;
      if (spellData.level > level) {
        throw new Error(`Spell ${spell.name} requires a higher level.`);
      }
    } catch (error) {
      throw new Error(`Spell ${spell.name} validation failed: ${error.message}`);
    }
  }

  private async validateFeat(feat: any) {
    try {
      const url = `${this.apiUrl}/feats/${feat.name.toLowerCase()}`;
      console.log(url)
      const response = await firstValueFrom(this.httpService.get(url));
      if (!response.data) {
        throw new Error(`Feat ${feat.name} not found.`);
      }
      const featData = response.data;
    } catch (error) {
      throw new Error(`Feat ${feat.name} validation failed: ${error.message}`);
    }
  }
}
