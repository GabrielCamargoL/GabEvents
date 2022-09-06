import mongoose, { model, Schema, Document } from "mongoose";

export interface IShow extends Document {
  title: string;
  description: string;
  hashtags: Schema.Types.Array;
  price: number;
  imgSrc: string;
  created_at: Date;
}

export const ShowSchema: Schema = new mongoose.Schema<IShow>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    requered: true,
  },
  hashtags: {
    type: Schema.Types.Array,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  imgSrc: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const Show = model('Show', ShowSchema);

export default Show;