import Api  from "./Api"

export type UpvoteVideo = {
    videoId: string,
}

export default {

    upvoteVideo: async (data: UpvoteVideo) => {
        return Api.post({path:'/auth/upvote', data})
    } 
    
}