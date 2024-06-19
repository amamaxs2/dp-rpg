import { Controller, Get, Post, Body, Param, Delete, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    try {
      return this.productsService.create(createProductDto);
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll() {
    try {
        return this.productsService.findAll();
    } catch (error) {
        throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
        return this.productsService.findById(id);
    } catch (error) {
        throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   try {
  //        return this.productsService.update(id, updateProductDto);
  //   } catch (error) {
  //         throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  //   }
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
        return this.productsService.remove(id);
    } catch (error) {
        throw new BadRequestException('Something bad happened:(', { cause: new Error(), description: 'meu deus ><' })
    }
  }
}
