
type videoProps = {    
    videoTitle: string
    file?: File
}

export default class Video {
    
    public videoTitle: string

    constructor () {
        this.videoTitle = 'Sem Titulo'
    }

    public setVideoTitle ( videoTitle: string ) {
        console.log('setting', videoTitle);
        this.videoTitle = videoTitle
        console.log('seted', this.videoTitle);  
    }

    public getVideoTitle() {
        return this.videoTitle
    }

}