import axios from 'axios';

const products = 'http://localhost:8000/products'
const posts = 'http://localhost:8000/posts'
const blogs = 'http://localhost:8000/blogs'

// fetch products
export const fetchProducts = () => axios.get(products)
export const createProduct = (newProduct) => axios.post(products, newProduct)
// fetch posts
export const fetchPosts = () => axios.get(posts)
export const createPost = (newPost) => axios.post(posts, newPost)
// fetch posts
export const fetchBlogs = () => axios.get(blogs)
export const createBlog = (newBlog) => axios.post(blogs, newBlog)