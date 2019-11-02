import React, { useState } from 'react'

import { Container, Tab } from './styles'

export default function Store() {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<Container>
			<h1 className='title'>Loja</h1>
			<span className='tabs'>
				<Tab
					active={activeTab === 0}
					onClick={() => setActiveTab(0)}
				>
					<p>funcionários</p>
				</Tab>
				<Tab
					active={activeTab === 1}
					onClick={() => setActiveTab(1)}
				>
					<p>equipamentos</p>
				</Tab>
				<Tab
					active={activeTab === 2}
					onClick={() => setActiveTab(2)}
				>
					<p>infraestrutura</p>
				</Tab>
				<Tab
					active={activeTab === 3}
					onClick={() => setActiveTab(3)}
				>
					<p>cargos</p>
				</Tab>
			</span>
			{/* TODO: conteúdo da loja */}
		</Container>
	)
}
