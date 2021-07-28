import { Body, Param, Get, Controller, Post, Delete, Patch } from '@nestjs/common';
import { ProductModel } from 'src/product/product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, 'id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel) {

  }

  @Post('find')
  async find(@Body() dto: FindProductDto) {

  }
}