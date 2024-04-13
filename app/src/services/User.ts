import Api from "./Api";

    type signInData = {
        email:string
    }
    
    type signUpData = {
        username: string,

    }

export default {

    signIn: (data: signInData) => {
        console.log(data);
        const config = {
            iaAuth: true
        }
        return Api.post('/signin', data)
    },

    signUp: (data: signUpData) => {
        return Api.post('/signup', data)
    }
}