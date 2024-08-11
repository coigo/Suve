import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId:               Number,
  username:             String,
  email:                String,
  upvoteAmmount:        Number,

})

export default mongoose.model('user', UserSchema)