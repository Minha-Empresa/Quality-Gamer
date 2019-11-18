import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Provider } from 'react-redux'

import Routes from './routes'
import store from './store'

library.add(fas, fab)

export const App = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
	)

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
