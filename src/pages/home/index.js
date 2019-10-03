import React from 'react'

import { Container } from './styles'
import NavBar from './components/navigation'
import Cards from './components/cards'
import Store from './components/store'

export default function Home() {
	return (
		<Container>
			<div className="left">
				<NavBar />
				<Cards />
			</div>
			<div className="right">
				<Store />
			</div>
		</Container >
	)
}
