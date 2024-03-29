import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ObjectId, Types } from 'mongoose';

export interface ReviewModel extends Base {}
export class ReviewModel extends TimeStamps {

  @prop()
  id: string;

  @prop()
  name: string;

  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  rating: number;

  @prop()
  productId: Types.ObjectId;
}
