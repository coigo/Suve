import UserService from "../service/UserService";
import type { Request, Response } from "express";
import { asyncErrorHandler } from "./ErrorController";
import { CustomError } from "../infra/shared/CustomError";
import { UserRepository } from "../repository/userRepository";
import { AuthRequest } from "../infra/shared/AuthRequest";

export default class UserController {

	private errorHandler = asyncErrorHandler;
	private user;

	constructor() {
		this.user = new UserService(new UserRepository());
	}

	public signUp = this.errorHandler(async ({ body }: Request, res: Response) => {
		try {
			console.log('chegou');
			const signUp = await this.user.signUp(body);
			return res.send(body).status(200);
		} catch (err) {
			res.status(err.statusCode);
			res.send(err);
		}
	})
	public signInRequest = this.errorHandler(async (req: Request, res: Response) => {

		const { body } = req
		console.log(req);


		const result = await this.user.signInRequest(body);
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

		const result = await this.user.signIn(body);
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

	public addUserInterests = this.errorHandler(async ({ user, body: { interests } }: AuthRequest, res: Response) => {
		
		const result = await this.user.addUserInterests(user.id, interests)
		return res.status(200).end()
	})

}
