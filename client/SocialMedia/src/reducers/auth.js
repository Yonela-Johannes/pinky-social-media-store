
import { AUTH, LOGOUT } from '../constants/actionTypes'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify( ...action?.data))
            return {...state, authData: action?.data}
        // case: LOGOUT:
        // return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        default:
            return state;
    }
}

export default authReducer