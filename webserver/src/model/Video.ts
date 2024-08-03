import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  name:                 String,
  title:                String,
  size:                 Number,
  id:                   String,
  upvotes:              Number,
  weight:               Number,
  userId:               Number,
  url:                  String

})

export default mongoose.model('video', VideoSchema)