import axios from "axios";
import dotenv from 'dotenv'
import { apiBaseURL } from "../helpers/env";
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import auth from "../helpers/auth";


interface IRequest {
    path: string
    data?: any
    config?: AxiosRequestConfig<any>
}

type err =  {
    message: string,
    status: number
}

class Api {

	private config: AxiosRequestConfig;

	private api: AxiosInstance

	constructor( ) {

		this.config = {
			baseURL: apiBaseURL,
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${auth.getAuth()}`
			},
		};

		
		this.api = axios.create(this.config)
	}



	private handleSuccess({data, status}:  AxiosResponse) {

		if (status === 202) {
			auth.handleLogin(data)
			return {
				auth: true
			}
		}
		return Promise.resolve(data)
		
	}

	private handleReject(err: AxiosError<err, err>) {

		if (err.response?.data) {
			
			throw  {
				message: err.response.data.message,
				status: err.response.data.status,	
			};
		}
		throw { err };
	}

	public get({ path, config }: IRequest) {
		return this.api
			.get(apiBaseURL + path, {
				...config
			})
			.then(({ status, data }) => Promise.resolve(data))
            .catch(err => this.handleReject(err))
            
        }
        
        public post({ path, data, config }: IRequest) {
			console.log(apiBaseURL);
			
            return this.api
			.post(apiBaseURL + path, data, {
				...config

			})
			.then(data => this.handleSuccess(data))
            .catch(err => this.handleReject(err))
    }
}

export default new Api
 