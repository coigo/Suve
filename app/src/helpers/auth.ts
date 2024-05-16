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

    handleLogin: ({user, jwt}: handleLogin) => {
        try {
            cookies.set('authToken', jwt, {path:'/', httpOnly: true})
            localStorage.setItem('userToken', JSON.stringify(user))
        }
        catch( err) {
            console.log(err);
            
            throw new Error('Não foi possivel fazer login')
        }
    },

    getAuth: () => {
        const auth = cookies.get('authToken')
        console.log(auth);
        return auth
        
    }
}


export default auth