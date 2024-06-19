import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = this.productModel.create(createProductDto);
    return createdProduct;
  }

  findAll() {
    return this.productModel.find();
  }

  findById(id: string) {
    return this.productModel.findById(id);
  }

  // update(id: string, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
