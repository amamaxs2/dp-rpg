import { IsString, IsArray, IsObject, IsOptional, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

class ClassDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}

class FeatDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsOptional()
  prerequisites: string[];
}

class AlignmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}

class ItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}

export class CreatePersonagemDto {
  @IsString()
  @MinLength(3)
  @MaxLength(40)
  name: string;

  @IsObject()
  @IsNotEmpty()
  classes: ClassDto;

  @IsArray()
  @IsOptional()
  spells: string[];

  @IsArray()
  @IsOptional()
  feats: FeatDto[];

  @IsObject()
  @IsNotEmpty()
  alignment: AlignmentDto;

  @IsArray()
  @IsOptional()
  abilities: string[];

  @IsArray()
  @IsOptional()
  items: ItemDto[];
}
