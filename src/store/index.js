import { createStore, combineReducers } from 'redux'

import cards, { Types as CardsTypes } from './reducers/cards'

const store = createStore(combineReducers({
	cards
}))

export const Types = { ...CardsTypes }

export default store
