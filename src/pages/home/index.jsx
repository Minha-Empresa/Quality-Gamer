import React, { useState } from 'react'

import { Container } from './styles'
import NavBar from './components/navigation'
import Cards from './components/cards'
import Store from './components/store'

export default function Home() {
	const [cash, setCash] = useState(50)
	const [employees, setEmployees] = useState(50)
	const [code, setCode] = useState(50)
	const [clients, setClients] = useState(50)

	return (
		<Container>
			<div className="left">
				<NavBar
					code={code}
					cash={cash}
					employees={employees}
					clients={clients}
				/>
				<Cards
					sideEffect={sideEffect}
				/>
			</div>
			<div className="right">
				<Store />
			</div>
		</Container >
	)

	function sideEffect(effect) {
		if (cash + effect.cash < 0) setCash(0)
		else if (cash + effect.cash > 100) setCash(100)
		else setCash(cash + effect.cash)

		if (employees + effect.employees < 0) setEmployees(0)
		else if (employees + effect.employees > 100) setEmployees(100)
		else setEmployees(employees + effect.employees)

		if (code + effect.code < 0) setCode(0)
		else if (code + effect.code > 100) setCode(100)
		else setCode(code + effect.code)

		if (clients + effect.clients < 0) setClients(0)
		else if (clients + effect.clients > 100) setClients(100)
		else setClients(clients + effect.clients)
	}
}
