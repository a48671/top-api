import { Inject, Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateReviewDto } from 'src/review/dto/create-review.dto';
import { ReviewModel } from 'src/review/review.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>) {}

  async create(createReviewDto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return this.reviewModel.create(createReviewDto);
  }

  async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(productId: string): Promise<Array<DocumentType<ReviewModel>>> {
    return this.reviewModel.find({ productId: Types.ObjectId(productId) }).exec();
  }
}
