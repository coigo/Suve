
type commentProps = {
    id?: string
    videoId: string
    comment: string
    userId: number
    createdAt: Date
    updatedAt?:Date
}

type Upvote = {
    videoId: string
    userId:number
}

interface IVideoRepository {
    addComment(comment: commentProps): Promise<commentProps> 

    upvote(data: Upvote): Promise<Upvote | undefined> 
}

export class VideoService {

    constructor (private repository: IVideoRepository) { }

    async addComment (comment: commentProps) {
        return this.repository.addComment(comment)
    }
    
    public async upvote(data:Upvote) {
        return this.repository.upvote(data)

    }

}