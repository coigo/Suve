import { baseURL } from "./env"

export function redirectTo (path: string) {
    window.location.href = path
} 

export const getWatchUrl = (videoId: string) => {
    return  "watch?video=" + videoId
} 

