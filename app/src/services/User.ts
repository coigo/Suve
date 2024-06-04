import { AxiosError, AxiosPromise } from "axios";
import auth from "../helpers/auth";
import Api from "./Api";

    type signInData = {
        email:string
        passKey:string
    }

    type SignInRequestData = {
        email:string
    }
    
    type signUpData = {
        email: string,

    }


export default {

    getData: (userId: string) => {
        return Api.get({path:`/user/data${userId}`}, )
    },

    signIn: (data: signInData) => {
        return Api.post({path: '/signin', data})
    },

    signInRequest: (data: SignInRequestData) => {
        return Api.post({path:'/request', data})
    },

    signUp: (data: signUpData) => {
        return Api.post({path:'/signup', data})
    },
}