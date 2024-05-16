import axios from "axios";
import dotenv from 'dotenv'
import { baseURL } from "../helpers/env";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import auth from "../helpers/auth";


interface request {
    path: string
    data?: any
    config?: AxiosRequestConfig<string>
}

type err =  {
    message: string,
    status: number
}

class Api {

	private baseUrl = baseURL;
	private config: AxiosRequestConfig

	contructor () {

		axios.defaults.withCredentials = true
		this.config = {
			auth: auth.getAuth()
		}
	}

	private handleSuccess({data, status}:  AxiosResponse) {

		console.log(status);
		
		if (status === 202) {
			auth.handleLogin(data)
			return {auth: true}
		}
		return Promise.resolve(data)
		
	}

	private handleReject(err: AxiosError<err, err>) {

		if (err.response?.data) {
			console.log('foi rejeitado');
			
			throw  {
				message: err.response.data.message,
				status: err.response.data.status,	
			};
		}
		throw { err };
	}

	public get({ path, config }: request) {
		return axios
			.get(baseURL + path, {
				...config, 
				headers: {
					auth: auth.getAuth()
				}
			})
			.then(({ status, data }) => Promise.resolve(data))
            .catch(err => this.handleReject(err))
            
        }
        
        public post({ path, data, config }: request) {
			
            return axios
			.post(baseURL + path, data, {
				...config, 
				headers: {
					auth: auth.getAuth()
				}
			})
			.then(data => this.handleSuccess(data))
            .catch(err => this.handleReject(err))
    }
}

export const api =  axios.create({
    baseURL: 'http://localhost:3000'
}) 

export default new Api
 