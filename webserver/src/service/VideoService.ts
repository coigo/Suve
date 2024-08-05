
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
    userId:number
}

interface IVideoRepository {
    createComment(comment: commentProps): Promise<commentProps> 

    getComments(videoId): Promise<commentProps[]>

    upvote(data: Upvote): Promise<Upvote | undefined> 
}

export class VideoService {

    constructor (private repository: IVideoRepository) { }

    async createComment (comment: commentProps) {
        return this.repository.createComment(comment)
    }
    
    async getComments ( videoId, page: number = 0 ) {
        return this.repository.getComments(videoId)
    }

    public async upvote(data:Upvote) {
        return this.repository.upvote(data)

    }

}