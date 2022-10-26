import apiUrl from '../apiConfig'
import axios from 'axios'

export const sailboatCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/sailboats',
		data: {
			sailboat: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}