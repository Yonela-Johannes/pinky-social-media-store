import axios from 'axios';

const products = 'http://localhost:8000/products'
const posts = 'http://localhost:8000/posts'
const blogs = 'http://localhost:8000/blogs'

// fetch products
export const fetchProducts = () => axios.get(products)
export const createProduct = (newProduct) => axios.post(products, newProduct)
export const updateProduct = (id, updatedProduct) => axios.patch(`${products}/${id}`, updatedProduct)
export const deleteProduct = (id) => axios.delete(`${products}/${id}`)
export const likeProduct = (id) => axios.patch(`${products}/${id}/likeProduct`)
export const recommendProduct = (id) => axios.patch(`${products}/${id}/recommendProduct`)
// fetch posts
export const fetchPosts = () => axios.get(posts)
export const createPost = (newPost) => axios.post(posts, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${posts}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`$${posts}/${id}`)
export const likePost = (id) => axios.patch(`${posts}/${id}/likePost`)
export const upvokePost = (id) => axios.patch(`${posts}/${id}/upvokePost`)
// fetch posts
export const fetchBlogs = () => axios.get(blogs)
export const createBlog = (newBlog) => axios.post(blogs, newBlog)
export const updateBlog = (id, updatedBlog) => axios.patch(`${blogs}/${id}`, updatedBlog)
export const deleteBlog = (id) => axios.delete(`${blogs}/${id}`)
export const likeBlog = (id) => axios.patch(`${blogs}/${id}/likeBlog`)
