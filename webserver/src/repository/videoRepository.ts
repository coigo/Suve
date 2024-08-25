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
    username: string
    createdAt: Date
    updatedAt?:Date
}

type Upvote = {
    videoId: string
    upvotes?: number
    userId:number
}

export default class VideoRepository {

    async writeVideo({ originalname, size, filename, videoTitle }: fileProps) {
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


    async find(video_id: string) {
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

    async createComment (data: commentProps) {
        const result = await Comment.create({
            comment:data.comment,
            createdAt:data.createdAt,
            userId:data.userId,
            videoId:data.videoId
        })
        return data
    }

    async getComments ( videoId, last ) {
        const comments = await Comment.find( { videoId }, {
            username: true,
            updatedAt: true,
            comment: true,
        }, {
            skip: last,
            limit: 10
        } );
        return comments as commentProps[]
    }

    async upvote(data: Upvote) {
        const { videoId } = data;
      
        const video = await Video.findById(videoId);
        if (!video) {
            return
        }
      
        video.upvotes = (video.upvotes || 0) + 1;
        
        const { id, upvotes } = await video.save();
        return {
            userId: data.userId,
            videoId: id, 
            upvotes
        } as Upvote
      
         
      }

}