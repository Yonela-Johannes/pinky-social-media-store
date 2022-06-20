import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    message: String,
    creator: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const BlogMessage = mongoose.model('BlogMessage', blogSchema)

export default BlogMessage;