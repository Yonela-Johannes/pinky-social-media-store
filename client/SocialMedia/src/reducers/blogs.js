import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
export default (blogs = [], action) => {
    switch (action.type) {
        case DELETE:
            return blogs.filter((blog) => blog._id !== action.payload)
        case UPDATE:
            return blogs.map((blog) => blog._id === action.payload._id ? action.payload : blog)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...blogs, action.payload];
        default:
            return blogs;
    }
}