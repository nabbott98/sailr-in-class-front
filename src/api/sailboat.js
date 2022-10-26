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

export const sailboatIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/sailboats',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const sailboatShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/sailboats/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const sailboatUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/sailboats/' + id,
		data: {
			sailboat: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const sailboatDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/sailboats/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}