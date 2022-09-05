import mongoose, { Schema } from "mongoose";

export const ShowSchema = new mongoose.Schema({
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