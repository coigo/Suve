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
    type interestsProps = {
        interests: string[]
    }

export default {

    getData: (userId: string) => {
        return Api.get({path:`/public/user/data${userId}`}, )
    },

    signIn: (data: signInData) => {
        return Api.post({path: '/public/signin', data})
    },

    signInRequest: (data: SignInRequestData) => {
        return Api.post({path:'/public/request', data})
    },

    signUp: (data: signUpData) => {
        return Api.post({path:'/public/signup', data})
    },
    addInterests: (data:interestsProps ) => {
        return Api.post({path: '/auth/user/interests', data })
    }
}