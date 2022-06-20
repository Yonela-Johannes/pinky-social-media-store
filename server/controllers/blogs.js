import BlogMessage from "../models/blogPost.js"

export const getBlogs =  async (req, res) => {
 try {
    const blogPost = await BlogMessage.find()

    res.status(200).json(blogPost)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createBlog =  async (req, res) => {
    const blog = req.body

    const newBlog = new BlogMessage(blog)

    try {
        await newBlog.save()

        res.status(201).json(newBlog)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}