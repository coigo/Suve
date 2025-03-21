import { error } from "node:console";
import User from "../model/User";

interface IUser {
    userId: number
    username?: string
    email?: string
    upvoteAmmount?: number
}



export class UserRepository {

    constructor() { }

    public async createUser(user: IUser) {
        const create = await User.create(user)
        return create as IUser
    }

    public async reduceUpvoteAmount(userId: number) {
        const [user] = await User.find({ userId })

    }

    public async decreaseUpvote(userId: number) {
        const [user] = await User.find({ userId })

        if (user.upvoteAmmount) {
            user.upvoteAmmount--
        }
        user.save()
        return userId
    }

    public async addToUpvotedVideos(data: any) {

        const { userId, videoId } = data
        const [user] = await User.find({ userId })

        if (!user.upvotedVideos) {
            user.upvotedVideos = []
        }
        user.upvotedVideos.push(videoId)
        user.save()
        return data
    }

    public async getUpvotedVideos(userId: number) {
        const [user] = await User.find({ userId })

        if (!user.upvotedVideos) {
            return []
        }
        return user.upvotedVideos

    }

    public async getUserInterests(userId: number) {
        const user = await User.findOne({ userId }, { interests: true })
        if (!user) throw new Error("Usuário não encontrato")
        return user.interests
    }

    public async addUserInterests(userId: number, interests: string[]) {
        const user = await User.findOne({ userId })
        console.log(userId)
        console.log(user)
        if (!user) throw new Error("Usuário não encontrato")


        user.interests = interests
        user.save()
        return user
    }
}