import React from 'react'

import { Container, Tab } from './styles'

export default function Store() {
	return (
		<Container>
			<h1 className='title'>Loja</h1>
			<span className='tabs'>
				<Tab active={true}>
					<p>funcionários</p>
				</Tab>
				<Tab active={false}>
					<p>?</p>
				</Tab>
				<Tab active={false}>
					<p>?</p>
				</Tab>
			</span>
		</Container>
	)
}
