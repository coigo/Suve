import path from "path"
import Api  from "./Api"

export type UpvoteVideo = {
    videoId: string,
}

interface getCommentsParams {
    params: {
        last: number
    }
    videoId: string
}

export interface CreateComment {
    comment: string
    videoId: string
}

export default {

    upvoteVideo: async (data: UpvoteVideo) => {
        return Api.post({path:'/auth/video/upvote', data})
    },

    getComments: async ({ videoId, params }: getCommentsParams) => {
        return Api.get({path:`/public/video/${videoId}/comment`, config: { params }})
    },

    createComment: async (data: CreateComment) => {
        return Api.post({path:'/public/video/comment', data})
    }
}

