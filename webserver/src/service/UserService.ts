import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

type user = {
	username: string;
	email: string;
};

export default class UserService {
	private userBaseURL;

	constructor() {
		this.userBaseURL = process.env.userBaseURL;
	}

	public async signInRequest({ email }: Partial<user>) {
		const { data: { errors, user } } = await axios.post(`${this.userBaseURL}/login_request`, { email });
		return { errors, user };
	}

	public async signIn(token: string) {
		const { data: { jwt, errors, user } } = await axios.post(`${this.userBaseURL}/login`, { token });
		return { jwt, errors, user };
	}

	public async signUp(newUser: user) {
		const signUp = await axios.post(`${this.userBaseURL}/create`, newUser);
		return signUp;
	}
}
