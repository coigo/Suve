import { truncate } from "fs";
import Cookies from "universal-cookie";

const cookies = new Cookies()

interface handleLogin {
    user: {
        email: string
        username: string
    }
    jwt: string
}

const auth = {

    handleLogin: ({ user, jwt }: handleLogin) => {
        try {
            cookies.set('authToken', jwt, { path: '/'})
            localStorage.setItem('userToken', JSON.stringify(user))
        }
        catch (err) {
            console.log(err);

            throw new Error('Não foi possivel fazer login')
        }
    },

    getAuth: () => {
        
        const auth = cookies.get('authToken')
        console.log(auth);
        return auth
    },

    getUser: () => {
        const user = localStorage.get('userToken')
        console.log(user)
        return user
    },

    isLogged: () => {
        if (localStorage.getItem("userToken")) {
            return true
        }
        return false
    },

    logout: () => {
        console.log('deslogado');

        localStorage.removeItem('userToken')
        cookies.remove('authToken')

    }
}


export default auth