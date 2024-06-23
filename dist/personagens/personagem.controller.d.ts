import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemController {
    private readonly personagensService;
    constructor(personagensService: PersonagemService);
    create(createPersonagemDto: CreatePersonagemDto): Promise<import("./schemas/personagem.schema").Personagem>;
    findAll(): Promise<import("./schemas/personagem.schema").Personagem[]>;
    findOne(id: string): Promise<import("./schemas/personagem.schema").Personagem>;
    update(id: string, updatePersonagemDto: UpdatePersonagemDto): Promise<import("./schemas/personagem.schema").Personagem>;
    remove(id: string): Promise<import("./schemas/personagem.schema").Personagem>;
    getRandomCharacter(level: number): Promise<import("./schemas/personagem.schema").Personagem>;
}
