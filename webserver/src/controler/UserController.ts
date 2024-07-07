import UserService from "../service/UserService";
import type { Request, Response } from "express";
import { asyncErrorHandler } from "./ErrorController";
import { CustomError } from "../CustomError";

export default class UserController {

	private errorHandler = asyncErrorHandler;
	private user;

	constructor() {
		this.user = new UserService();
	}

	public async signUp(req: Request, res: Response) {
		try {
			const { body } = req;
			const user = new UserService();

			const signUp = await user.signUp(body);
			return res.send(body).status(200);
		} catch (err) {
			res.status(err.statusCode);
			res.send(err);
		}
	}
	public signInRequest = this.errorHandler(async (req: Request, res: Response) => {

		const { body } = req
		console.log(req);

		const user = new UserService();

		const result = await user.signInRequest(body);
		if (result.user) {
			res.status(200);
			res.end()
		}
		else {
			throw new CustomError(result.errors[0].message, result.errors[0].status)
		}
	})

	public signIn = this.errorHandler(async (req: Request, res: Response) => {
		const { body } = req;
		const user = new UserService();

		const result = await user.signIn(body);
		console.log(result);

		if (result.jwt) {
			res.status(202);
			res.send({
				jwt: result.jwt,
				user: result.user,
			});
		}
		else {
			throw new CustomError(result.errors[0].message, result.errors[0].status)
		}

	});
}
