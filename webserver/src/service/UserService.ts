import dotenv from 'dotenv' 
import axios from 'axios'

dotenv.config() 

type user = {
    username:string,
    email:string
}

interface userInterface {
    
}

export default class UserService implements userInterface {

    private userBaseURL = process.env.UserBaseURL 

    public signIn (  ) {

    }

    public signUp ( newUser: user ) {
        try {
            const signUp = axios.post(`http://localhost:3003/create`, newUser)
            console.log(signUp);
            return signUp
            
        }
        catch ( err ) {
            console.log(err);
            return
        }
    }

}