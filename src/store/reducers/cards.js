import { createActions, createReducer } from 'reduxsauce'

import { getCards } from '../../services/api'

const defaultState = []

// load initial state from local storage
const INITIAL_STATE = defaultState

// reducer handlers
const loadCards = async (state = INITIAL_STATE, action) => {
	return action.cards
}

// action types & creators
export const { Types, Creators } = createActions({
	loadCards: null
})

// reducer
export default createReducer(INITIAL_STATE, {
	[Types.LOAD_CARDS]: loadCards
})
