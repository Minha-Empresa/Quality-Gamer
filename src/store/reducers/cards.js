import { createActions, createReducer } from 'reduxsauce'

const defaultState = []

// load initial state from local storage
const INITIAL_STATE = defaultState

// reducer handlers
const loadCards = (state = INITIAL_STATE, action) => {
	return action.cards
}

const deleteCards = (state = INITIAL_STATE, action) => {
	let cards = state.cards
	cards = cards.filter(card => card.details !== action.card.details)
	return cards
}

// action types & creators
export const { Types, Creators } = createActions({
	loadCards: ['cards'],
	deleteCards: ['cards']
})

// reducer
export default createReducer(INITIAL_STATE, {
	[Types.LOAD_CARDS]: loadCards,
	[Types.DELETE_CARDS]: deleteCards
})
