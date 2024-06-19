import { Controller, Get, Post, Body, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { AuthGuard } from 'src/auth/auth.guard';
//import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    try {
      return this.booksService.create(createBookDto);
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findById(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(id, updateBookDto);
  // }

  
  @UseGuards(AuthGuard) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
