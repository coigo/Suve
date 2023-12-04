
import Express ,{ Request, Response } from "express";
import WatchService from "../service/WatchService";

export default class WatchControler {

    async handle ( req: Request, res: Response ) {
        
        const driveBack = res
        const watchService = new WatchService({
            driveBack
        })
        const videoStream = watchService.startStreaming('aa')
        


    }
    
    
        

}