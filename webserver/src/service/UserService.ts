import dotenv from 'dotenv' 
import axios from 'axios'



dotenv.config() 

type user = {
    username:string,
    email:string
}   

export default class UserService {

    private userBaseURL  

    constructor () {
        this.userBaseURL = process.env.userBaseURL
    }

    public async signInRequest ( {email}: Partial<user> ) {
        try {
            const request = await axios.post(`${this.userBaseURL}/login_request`, {email}) 
            console.log(request);
            return 'ok'
            
        }
        catch (err) {
            console.log(err)
            return
        }
    }

    public signIn (  ) {

    }

    public async signUp ( newUser: user ) {
        try {
            const signUp = await axios.post(`${this.userBaseURL}/create`, newUser)
            console.log(signUp)
            return signUp
            
        }
        catch ( err ) {
            console.log(err);
            return
        }
    }
}