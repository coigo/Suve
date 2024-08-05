import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    comment: String,
    userId: Number,
    username: String,
    videoId: String,
    createdAt: Date,
    updatedAt:Date
})

export default mongoose.model('comment', CommentSchema)