export function saveState(key, state) {
	localStorage.setItem(key, JSON.stringify(state))
}

export function loadState(key, defaultState=null) {
	const json = localStorage.getItem(key)
	return json ? JSON.parse(json) : defaultState
}

export function destroyState(key) {
	localStorage.removeItem(key)
}
