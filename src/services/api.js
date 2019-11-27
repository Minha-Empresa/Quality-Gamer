import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost/cards/',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json'
	}
})

export async function getCards() {
	const response = await api.get('cards/')
	const list = response.data.map(card => ({
		title: card.card_title,
		details: card.card_description,
		choices: [{
			text: card.card_ct_choice,
			sideEffect: {
				cash: -5,
				employees: -5,
				code: 5,
				clients: 0
			}
		},
		{
			text: card.card_wr_choice,
			sideEffect: {
				cash: 0,
				employees: 5,
				code: -5,
				clients: 0
			}
		}
		]
	}))
	return list.reverse()
}

export async function login(username, password = '') {
	const data = new FormData()
	data.append('username', username)
	data.append('password', password)
	const response = await api.post('get_user/', data)
	localStorage.setItem('user', JSON.stringify(response.data))
}
