import axios, { AxiosResponse } from 'axios'
import moment, { Moment } from 'moment'

const api = axios.create({
	baseURL: `${process.env.REACT_APP_API_BASE_URL}`
})

export function fromMoment(value: Moment) {
	return value.format('YYYY-MM-DD[T]HH:mm:ss')
}

export function toMoment(value: string) {
	return moment(value, 'YYYY-MM-DD[T]HH:mm:ss')
}

export const SortDirection = {
	ascend: 1,
	descend: 2
}

export type PaginationFilter = {
	take: number
	skip: number
}
export type OrderFilter = {
	orderBy?: string
	orderByDirection?: number
}

class BaseService {
	static post<Payload, Response>(
		modelName: string,
		data: Payload,
		route = ''
	): Promise<AxiosResponse<Response>> {
		return api.post(`${modelName}${route}`, data)
	}

	static get<Response, Query>(
		modelName: string,
		route = '',
		query?: Query,
		responseType: 'json' | 'blob' = 'json'
	): Promise<AxiosResponse<Response>> {
		return api.get(`${modelName}${route}`, {
			params: query,
			responseType: responseType
		})
	}

	static put<Payload, Response>(
		modelName: string,
		data: Payload,
		route = ''
	): Promise<AxiosResponse<Response>> {
		return api.put(`${modelName}${route}`, data)
	}

	static remove<Payload, Response>(
		modelName: string,
		data: Payload,
		route = ''
	): Promise<AxiosResponse<Response>> {
		return api.delete(`${modelName}${route}`, { data })
	}
}

export default BaseService