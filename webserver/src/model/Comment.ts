import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    id: Number,
    comment: String,
    userId: Number,
    videoId: String,
    createdAt: Date,
    updatedAt:Date
})

export default mongoose.model('comment', CommentSchema)