import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from 'src/review/review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, 'id'>) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Get('by-product/:productId')
  async getByProductId(@Param('productId') productId: string) {

  }
}
