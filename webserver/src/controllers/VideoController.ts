import { Request, Response } from "express";
import { AuthRequest } from "../infra/shared/AuthRequest";
import VideoRepository from "../repository/videoRepository";
import { VideoService } from "../service/VideoService";
import { asyncErrorHandler } from "./ErrorController";

export default class VideoController {
    private service: VideoService
    private errorHandler = asyncErrorHandler

    constructor () {
        this.service = new VideoService(new VideoRepository()) 
    }

    public createComment = this.errorHandler(async ({  body: { videoId, comment} } : AuthRequest, res: Response) => {
        await this.service.createComment({
            userId: 1,
            username: 'teste',
            videoId,
            comment
        })
        res.send({videoId, comment})
    })
    
    public getComments = this.errorHandler(async ({ params: { videoId }, } : AuthRequest, res: Response) => {
        const comments = await this.service.getComments( String(videoId) )
        res.send(comments)
    })


    public upvoteVideo = this.errorHandler(async ({ user: { id }, body: { videoId }}: AuthRequest, res: Response) => {
        const upvote = await this.service.upvote({
            userId: id,
            videoId
        })
        res.send(upvote)
    })

}