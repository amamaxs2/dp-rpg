import { Controller, Get, Post, Body, Param, Delete, HttpException, HttpStatus, UseGuards, Patch } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { CreateFailedHttpException } from './exceptions/createFailed.exception';
//import { UpdatePersonagemDto } from './dto/update-personagem.dto';

@Controller('personagem')
export class PersonagemController {
  constructor(private readonly personagensService: PersonagemService) { }

  //@UseGuards(AuthGuard)
  @Post()
  async create(@Body() createPersonagemDto: CreatePersonagemDto) {
    try {
      return await this.personagensService.create(createPersonagemDto);
    } catch (error) {
      throw new CreateFailedHttpException('Parece que deu algo de errado pra criar seu personagem :( ');
    }
  }

  //@UseGuards(AuthGuard)
  @Get()
  async findAll() {
    try {
      return await this.personagensService.findAll();
    } catch (error) {
      throw new HttpException('Error fetching data', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //@UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.personagensService.findById(id);
    } catch (error) {
      throw new HttpException('Personagem not found', HttpStatus.NOT_FOUND);
    }
  }

  //@UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePersonagemDto: UpdatePersonagemDto) {
    try {
      return await this.personagensService.update(id, updatePersonagemDto);
    } catch (error) {
      if (error.name === 'NotFoundException') {
        throw new HttpException('Personagem not found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  //@UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.personagensService.remove(id);
    } catch (error) {
      throw new HttpException('Personagem not found', HttpStatus.NOT_FOUND);
    }
  }
}
