import UserService from "../service/UserService";

export default class UserControler {

    private user = new UserService()

    public signUp ( req: Request, res: Response ) {

    }

    public signIn ( req: Request, res: Response ) {
        const { body } = req
        const signIn = this.user.signIn()


    }

}