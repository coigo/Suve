import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  name:                 String,
  title:                String,
  size:                 Number,
  publicId:             String,
  upvotes:              Number,
  weight:               Number,
  userId:               Number,
  url:                  String,
  imagemName:           String,
  tags:                [String] 

})

export default mongoose.model('video', VideoSchema)