export async function saveState(key, state) {
	localStorage.setItem(key, JSON.stringify(state))
}

export async function loadState(key, defaultState) {
	const json = await localStorage.getItem(key)
	return json ? JSON.parse(json) : defaultState
}

export async function destroyState(key) {
	localStorage.removeItem(key)
}
