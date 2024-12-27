import path from "path"
import Api  from "./Api"
import auth from "../helpers/auth"

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

export interface IAddAttributes {
    title: string,
    tags: string[]
}

interface SearchQuery {
    search: string
}

export default {

    getVideos: async () => {
        if (auth.isLogged()) {
            return Api.get({path:`/auth/video/recomendacoes`})
        }
        return Api.get({path:`/public/video/recomendacoes`})
    },

    getSearchVideo: async (params: SearchQuery) => {
        return Api.post({path:'/auth/video/search', config: {params}})
    },

    upvoteVideo: async (data: UpvoteVideo) => {
        return Api.post({path:'/auth/video/upvote', data})
    },

    getComments: async ({ videoId, params }: getCommentsParams) => {
        return Api.get({path:`/public/video/${videoId}/comment`, config: { params }})
    },

    createComment: async (data: CreateComment) => {
        return Api.post({path:'/public/video/comment', data})
    },

    addAttributes: async (publicId: string, data: IAddAttributes) => {
        return Api.post({path:`/auth/upload/${publicId}/`, data})
    }
}

