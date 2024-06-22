declare class ClassDto {
    name: string;
    url: string;
}
declare class FeatDto {
    name: string;
    prerequisites: object[];
}
declare class AlignmentDto {
    name: string;
    url: string;
}
declare class ItemDto {
    name: string;
    description: string;
}
declare class SpellDto {
    index: string;
    name: string;
    level: number;
    url: string;
}
export declare class CreatePersonagemDto {
    name: string;
    level: number;
    classes: ClassDto;
    spells: SpellDto[];
    feats: FeatDto[];
    alignment: AlignmentDto;
    abilities: string[];
    equipment: ItemDto[];
}
export {};
