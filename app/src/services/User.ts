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

    signIn: (data: signInData) => {
			console.log(data);

        return Api.post({path: '/signin', data})
    },

    signInRequest: (data: SignInRequestData) => {
        return Api.post({path:'/request', data})
    },

    signUp: (data: signUpData) => {
        return Api.post({path:'/signup', data})
    }
}