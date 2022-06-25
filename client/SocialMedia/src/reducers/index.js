import { combineReducers } from "redux";

import products from './products'
import posts from './posts'
import blogs from './blogs'
import auth from './auth'

export default combineReducers({ products, posts, blogs, auth });