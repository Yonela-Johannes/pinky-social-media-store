import axios from 'axios';

const products = 'http://localhost:8000/products'
const posts = 'http://localhost:8000/posts'
const blogs = 'http://localhost:8000/blogs'

// fetch products
export const fetchProducts = () => axios.get(products)
export const createProduct = (newProduct) => axios.post(products, newProduct)
export const updateProduct = (id, updatedProduct) => axios.patch(`${products}/${id}`, updatedProduct)
// fetch posts
export const fetchPosts = () => axios.get(posts)
export const createPost = (newPost) => axios.post(posts, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${posts}/${id}`, updatedPost)
// fetch posts
export const fetchBlogs = () => axios.get(blogs)
export const createBlog = (newBlog) => axios.post(blogs, newBlog)
export const updateBlog = (id, updatedBlog) => axios.patch(`${blogs}/${id}`, updatedBlog)