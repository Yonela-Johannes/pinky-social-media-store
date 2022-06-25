import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const signin = (userData, navigate) => async () => {
    try {
        // log in the user

        navigate('/')
    } catch (error) {
        console.log(error)
    }       
}

export const signup = (userData, navigate) => async () => {
    try {
        // signup in the user

        navigate('/')
    } catch (error) {
        console.log(error)
    }
}