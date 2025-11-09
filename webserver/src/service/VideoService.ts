import { commentProps, IVideoRepository, Upvote, VideoAttributes } from "repository/interface/IVideoRepository"
import { getRandomValues, sortByKey } from "../util/array"
import { IUserRepository } from "repository/interface/IUserRepository"
export class VideoService {

    constructor(
        private repository: IVideoRepository,
        private userRepo: IUserRepository
    ) { }

    async createComment(comment: commentProps) {
        return this.repository.createComment(comment)
    }

    async getComments(videoId: string, last: number = 0) {
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
        return videos
        
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