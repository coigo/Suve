import Express, { Request, Response } from "express";

import WatchControler from "./controler/WatchControler";

const watch = new WatchControler()

export const router = Express.Router()

router.get('/watch', watch.handle )