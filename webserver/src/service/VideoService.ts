import { getRandomValues, sortByKey } from "../util/array"

type commentProps = {
    id?: string
    videoId: string
    comment: string
    userId: number
    username: string
    createdAt?: Date
    updatedAt?: Date
}

type Upvote = {
    videoId: string
    upvotes?: number
    userId: number
}

type VideoAttributes = {
    title: string
}

type Video = {
    name: string,
    title: string,
    size: number,
    publicId: string,
    upvotes: number,
    weight: number,
    userId: number,
    url: string,
    tags: string[]
}

interface IVideoRepository {
    createComment(comment: commentProps): Promise<commentProps>

    getComments(videoId, last): Promise<commentProps[]>

    addVideoAttributes(publicId: string, att: VideoAttributes): Promise<Upvote | undefined>

    upvote(data: Upvote): Promise<Upvote | undefined>

    getVideosByInterests(interests: string[]): Promise<Video[]>

    getVideosBySearch(search: string) : Promise<Video[]>
    
    getTopRatedVideos(): Promise<Video[]>
}

interface IUserRepository {
    decreaseUpvote(userId: number): Promise<any>
    
    addToUpvotedVideos(data: Upvote): Promise<Upvote>
    
    getUpvotedVideos(userId: number): Promise<string[]>
    
    getUserInterests(userId: number): Promise<string[]>
    
    addUserInterests(userId: number, interests: string[]): Promise<any>

}

export class VideoService {

    constructor(
        private repository: IVideoRepository,
        private userRepo: IUserRepository
    ) { }

    async createComment(comment: commentProps) {
        return this.repository.createComment(comment)
    }

    async getComments(videoId, last: number = 0) {
        return this.repository.getComments(videoId, last)
    }

    public async upvote(data: Upvote) {

        const upvotedVideos = await this.userRepo.getUpvotedVideos(data.userId)

        const upvoted = upvotedVideos.find(upvote => upvote === data.videoId)
        if (upvoted) {
            return 400
        }

        const video = await this.repository.upvote(data)

        await this.userRepo.decreaseUpvote(data.userId)
        await this.userRepo.addToUpvotedVideos(data)
        return video

    }

    public async addVideoAttributes(publicId: string, att: VideoAttributes) {
        return this.repository.addVideoAttributes(publicId, att)
    }

    public async getVideosByInterests (userId: number) {
        const interests = await this.userRepo.getUserInterests(userId)
        
        const videos = await this.repository.getVideosByInterests(interests)
        const orderedVideos = sortByKey("peso", videos).reverse()
        const  moreRatedVideos = orderedVideos.slice(1, 15)
        return getRandomValues(moreRatedVideos, 10)
        
    }
    
    public async getTopRatedVideos () {
        console.log('a')
        const videos = await this.repository.getTopRatedVideos()
        console.log(videos)
        const mostRatedVideos = videos.slice(1, 15)
        return getRandomValues(mostRatedVideos, 10)

    }

    public async getVideosBySearch(search: string) {
        return this.repository.getVideosBySearch(search)
    } 

}