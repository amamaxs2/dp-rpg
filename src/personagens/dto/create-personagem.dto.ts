import { IsString, IsArray, IsObject, IsOptional, IsNotEmpty, MinLength, MaxLength, IsInt, Max, Min } from 'class-validator';

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
  @IsObject({ each: true })
  prerequisites: object[];
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

class SpellDto {
  @IsString()
  @IsNotEmpty()
  index: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  level: number;

  @IsString()
  @IsNotEmpty()
  url: string;
}

export class CreatePersonagemDto {
  @IsString()
  @MinLength(3)
  @MaxLength(40)
  name: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  level: number;

  @IsObject()
  @IsNotEmpty()
  classes: ClassDto;

  @IsArray()
  @IsOptional()
  @IsObject({ each: true })
  spells: SpellDto[];

  @IsArray()
  @IsOptional()
  @IsObject({ each: true })
  feats: FeatDto[];

  @IsObject()
  @IsNotEmpty()
  alignment: AlignmentDto;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  abilities: string[];

  @IsArray()
  @IsOptional()
  @IsObject({ each: true })
  equipment: ItemDto[];
}
