import { combineReducers } from "redux";

import products from './products'
import posts from './posts'
import blogs from './blogs'

export default combineReducers({ products, posts, blogs });