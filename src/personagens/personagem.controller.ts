import { Controller, Get, Post, Body, Param, Delete, HttpException, HttpStatus, UseGuards, Patch } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { CreateFailedHttpException } from './exceptions/createFailed.exception';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('personagem')
@Controller('personagem')
export class PersonagemController {
  constructor(private readonly personagensService: PersonagemService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new personagem' })
  @ApiResponse({ status: 201, description: 'The personagem has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createPersonagemDto: CreatePersonagemDto) {
    try {
      return await this.personagensService.create(createPersonagemDto);
    } catch (error) {
      throw new CreateFailedHttpException('Parece que deu algo de errado pra criar seu personagem :( ');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all personagens' })
  @ApiResponse({ status: 200, description: 'Return all personagens.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAll() {
    try {
      return await this.personagensService.findAll();
    } catch (error) {
      throw new HttpException('Error fetching data', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a personagem by id' })
  @ApiResponse({ status: 200, description: 'Return the personagem.' })
  @ApiResponse({ status: 404, description: 'Personagem not found.' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.personagensService.findById(id);
    } catch (error) {
      throw new HttpException('Personagem not found', HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a personagem by id' })
  @ApiResponse({ status: 200, description: 'The personagem has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Personagem not found.' })
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
  @ApiOperation({ summary: 'Delete a personagem by id' })
  @ApiResponse({ status: 200, description: 'The personagem has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Personagem not found.' })
  async remove(@Param('id') id: string) {
    try {
      return await this.personagensService.remove(id);
    } catch (error) {
      throw new HttpException('Personagem not found', HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('random/:level')
  @ApiOperation({ summary: 'Get a random personagem by level' })
  @ApiResponse({ status: 200, description: 'Return the random personagem.' })
  @ApiResponse({ status: 500, description: 'Error creating random character.' })
  async getRandomCharacter(@Param('level') level: number) {
    try {
      return await this.personagensService.createRandomCharacter(level);
    } catch (error) {
      throw new HttpException('Error creating random character', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
