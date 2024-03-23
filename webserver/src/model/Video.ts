import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  name:                 String,
  size:                 Number,
  id:                   String,
  url:                  String

})

export default mongoose.model('video', VideoSchema)