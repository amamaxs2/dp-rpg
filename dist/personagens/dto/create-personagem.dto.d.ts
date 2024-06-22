declare class ClassDto {
    name: string;
    url: string;
}
declare class FeatDto {
    name: string;
    prerequisites: string[];
}
declare class AlignmentDto {
    name: string;
    url: string;
}
declare class ItemDto {
    name: string;
    description: string;
}
export declare class CreatePersonagemDto {
    name: string;
    level: number;
    classes: ClassDto;
    spells: string[];
    feats: FeatDto[];
    alignment: AlignmentDto;
    abilities: string[];
    items: ItemDto[];
}
export {};
