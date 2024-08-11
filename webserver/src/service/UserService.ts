import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

interface IUser {
    userId: number
	email?: string
	username?: string
    upvoteAmmount?: number
}

interface AuthDTO {
	user: string
	email: string
}

interface IUserRepository {
	createUser: (user: IUser) => Promise<IUser>
}

export default class UserService {
	private userBaseURL;

	constructor( private userRepository: IUserRepository ) {
		this.userBaseURL = process.env.userBaseURL;
	}

	public async signInRequest({ email }: Partial<AuthDTO>) {
		const { data: { errors, user } } = await axios.post(`${this.userBaseURL}/login_request`, { email });
		return { errors, user };
	}

	public async signIn(token: string) {
		const { data: { jwt, errors, user } } = await axios.post(`${this.userBaseURL}/login`, { token });
		return { jwt, errors, user };
	}

	public async signUp(newUser: AuthDTO) {
		try {
			const { data: { user }  } = await axios.post(`${this.userBaseURL}/create`, newUser);
			
			
			await this.userRepository.createUser({
				userId: user.id,
				username: user.username,
				email: user.email,
				upvoteAmmount: 100
			})
			return user;
			
		}
		catch (err: any) {
			console.log(err);
			throw err
		}
	}
}
