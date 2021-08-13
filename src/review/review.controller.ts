import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateReviewDto } from 'src/review/dto/create-review.dto';
import { REVIEW_NOT_FOUND } from 'src/review/review.constants';
import { ReviewModel } from 'src/review/review.model';
import { ReviewService } from 'src/review/review.service';
import { DocumentType } from '@typegoose/typegoose/lib/types';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}
  @Post('create')
  async create(@Body() createReviewDto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return this.reviewService.create(createReviewDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedReview = await this.reviewService.delete(id);
    if (!deletedReview) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Get('by-product/:productId')
  async getByProductId(
    @Param('productId') productId: string
  ): Promise<Array<DocumentType<ReviewModel>>> {
    return this.reviewService.findByProductId(productId);
  }
}
