
type commentProps = {
    id?: string
    videoId: string
    comment: string
    userId: number
    username: string
    createdAt?: Date
    updatedAt?:Date
}

type Upvote = {
    videoId: string
    upvotes?: number
    userId:number
}

interface IVideoRepository {
    createComment(comment: commentProps): Promise<commentProps> 

    getComments(videoId, last): Promise<commentProps[]>

    upvote(data: Upvote): Promise<Upvote | undefined> 
}

interface IUserRepository {
    decreaseUpvote (userId: number): Promise<any>

    addToUpvotedVideos (data: Upvote): Promise<Upvote>

    getUpvotedVideos(userId: number): Promise<string[]>

}

export class VideoService {

    constructor (
        private repository: IVideoRepository,
        private userRepo: IUserRepository
    ) { }

    async createComment (comment: commentProps) {
        return this.repository.createComment(comment)
    }
    
    async getComments ( videoId, last: number = 0 ) {
        return this.repository.getComments(videoId, last)
    }

    public async upvote(data:Upvote) {

        const upvotedVideos = await this.userRepo.getUpvotedVideos(data.userId)
        
        const upvoted = upvotedVideos.find(upvote => upvote === data.videoId)
        if ( upvoted ) {
            return 400
        }

        const video = await this.repository.upvote(data)

        await this.userRepo.decreaseUpvote(data.userId)
        await this.userRepo.addToUpvotedVideos(data)
        return video
        
    }

}