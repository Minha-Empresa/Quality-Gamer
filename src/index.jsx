import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Routes from './routes'

library.add(fas, fab)

ReactDOM.render(
	<Routes />,
	document.getElementById('root')
)
