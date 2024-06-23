import { Controller, Get, Post, Body, Param, Delete, HttpException, HttpStatus, UseGuards, Patch } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { CreateFailedHttpException } from './exceptions/createFailed.exception';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('personagem')
export class PersonagemController {
  constructor(private readonly personagensService: PersonagemService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPersonagemDto: CreatePersonagemDto) {
    try {
      return await this.personagensService.create(createPersonagemDto);
    } catch (error) {
      throw new CreateFailedHttpException('Parece que deu algo de errado pra criar seu personagem :( ');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    try {
      return await this.personagensService.findAll();
    } catch (error) {
      throw new HttpException('Error fetching data', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.personagensService.findById(id);
    } catch (error) {
      throw new HttpException('Personagem not found', HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.personagensService.remove(id);
    } catch (error) {
      throw new HttpException('Personagem not found', HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('random/:level')
  async getRandomCharacter(@Param('level') level: number) {
    try {
      return await this.personagensService.createRandomCharacter(level);
    } catch (error) {
      throw new HttpException('Error creating random character', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
