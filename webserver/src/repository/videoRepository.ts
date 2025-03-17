import mongoose from 'mongoose'
import Video from '../model/Video'
import Comment from '../model/Comment'
import { getRandomValues, sortByKey } from '../util/array'

type fileProps = {
    originalname: string
    name: string,
    videoTitle: string
    filename: string
    publicId: string
    size: number
    userId:number
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
    imagemName: string,
    tags: string[]
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

    async writeVideo({ userId, originalname, size, filename, videoTitle, publicId }: fileProps) {
        try {
            return  Video.create({
                url: `./videos/${filename}`,
                name: originalname,
                size: size,
                title: videoTitle,
                publicId,
                userId
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

    async find(publicId: string) {
        try {
            const video = await Video.find({ publicId })
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
      
        const video = await Video.findOne({publicId: videoId});
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

      async getVideosByInterests ( interests: string[] ) {
        try {
            const videos = await Video.find({ tags: {$in: interests}})
            console.log(videos)
            return videos as Video[]
        }
        catch(err) {
            throw new Error('Não foi possivel buscar pelos videos')
        }
    }
      
      async getVideosBySearch ( search: string ) {
        try {
            console.log('a')
            const videos = await Video.find({
                $or: [
                  { title: { $regex: search, $options: 'i' } },
                  { tags: { $in: [search] } }
                ]
              }).exec();
              console.log(videos.length)
              return videos as Video[];
            }
            catch(err) {
                console.log(err)
            throw new Error('Não foi possivel buscar pelos videos')
        }
      }

      async getTopRatedVideos ( ) {
        const videos = await Video.find( )
        return videos as Video[]
      }

}