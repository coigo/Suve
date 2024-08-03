import mongoose from 'mongoose'
import Video from '../model/Video'
import Comment from '../model/Comment'
import { randomUUID } from 'crypto'

type fileProps = {
    originalname: string
    videoTitle: string
    filename: string
    size: number
}

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

export default class VideoRepository {

    public async writeVideo({ originalname, size, filename, videoTitle }: fileProps) {
        try {
            const post = await Video.create({
                url: `./videos/${filename}`,
                name: originalname,
                size: size,
                title: videoTitle
            })
            this.find(this.removeDotmp4(filename))
            
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }

    private removeDotmp4(filename: string) {
        const idWithoutMP4 = filename.split('.mp4')
        return idWithoutMP4[0]
    }


    public async find(video_id: string) {
        try {
            const video = await Video.find({ _id: video_id })
            if (video[0]) {
                return video[0].url
            }
                return null
        } catch (err) {
            return null
        }
    }

    public async addComment (data: commentProps) {
        const result = await Comment.create({
            id: randomUUID(),
            commentc:data.comment,
            createdAtcre:data.createdAt,
            userId:data.userId,
            videoIdv:data.videoId
        })
        return data
    }

    public async upvote(data: Upvote) {
        const { videoId } = data;
      
        const video = await Video.findById(videoId);
        if (!video) {
            return
        }
      
        video.upvotes = (video.upvotes || 0) + 1;
        
        await video.save();
      
        return data;
      }

}