import { IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(3)
  @MaxLength(40)
  name: String;

  classes: {name: String, url: String};
  spells: Array;

  feats:
  items:

  // @IsNumber()
  // @Min(1)
  // @Max(100)
  // price: number;
  // author: string;
  // ISBN: string;

// Nome
// Classe
// Atributos
// Feats
// Alinhamento
// Talentos
// Magias
// items
}
