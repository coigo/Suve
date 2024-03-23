import mongoose from 'mongoose'
import Video from '../model/Video'

type fileProps = {
    originalname: string
    filename: string
    size: number
}

export default class VideoRepository {

    public async writeVideo({ originalname, size, filename }: fileProps) {
        try {
            const post = await Video.create({
                id: this.removeDotmp4(filename),
                url: `./videos/${filename}`,
                name: originalname,
                size: size,
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
            const video = await Video.find({ id: video_id })
            if (video[0]) {
                return video[0].url
            }
            else {
                return null
            }
        } catch (err) {
            return null
        }
    }


}