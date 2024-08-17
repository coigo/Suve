import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId:               Number,
  username:             String,
  email:                String,
  upvoteAmmount:        Number,
  upvotedVideos:        [String]
})

export default mongoose.model('user', UserSchema)