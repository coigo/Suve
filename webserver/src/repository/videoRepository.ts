import mongoose from 'mongoose'
import Video from '../model/Video'
import Comment from '../model/Comment'
import { randomUUID } from 'crypto'

type fileProps = {
    originalname: string
    videoTitle: string
    filename: string
    publicId: string
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

    async writeVideo({ originalname, size, filename, videoTitle, publicId }: fileProps) {
        try {
            return  Video.create({
                url: `./videos/${filename}`,
                name: originalname,
                size: size,
                title: videoTitle,
                publicId
            })
            
        } catch (err) {
            console.log(err)
            return false
        }
    }

    async addVideoAttributes(publicId, att) {
        const video = await Video.findOne({publicId})

        if (!video) throw new Error('Video invalido')

        Object.assign(video, att)
        await video.save()
        return publicId
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
            createdAt:new Date(),
            userId:data.userId,
            username:data.username,
            videoId:data.videoId
        })
        return data
    }

    async getComments ( videoId, last ) {
        const comments = await Comment.find( { videoId }, {
            createdAt: true,
            username: true,
            userId: true,
            comment: true,
        }, 
        {
            skip: last,
            limit: 10,
            
        }
    ).sort({ createdAt: -1 });

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