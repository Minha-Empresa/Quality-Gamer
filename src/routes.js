import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'

export default function AppRouter() {
	return (
		<Router>
			<Route
				path='/game'
				exact component={Home}
			/>
			<Route
				path='/'
				component={Login}
			/>
		</Router>
	)
}
