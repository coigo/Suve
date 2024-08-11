import User from "../model/User";

interface IUser {
    userId: number
	username?: string
	email?: string
    upvoteAmmount?: number
}

export class UserRepository {

    constructor () { }

    public async createUser ( user: IUser ) {
        const create = await User.create(user) 
        return create as IUser
    }

    public async reduceUpvoteAmount ( userId: number ) {
        const [ user ] = await User.find({ userId })

    }

}