import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, Tab, ItemContainer } from './styles'

import Item from './item'

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
					<p>pessoas</p>
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
					<p>cargos</p>
				</Tab>
			</span>

			<ItemContainer>
				{ activeTab === 0 && <>

					<Item icon='user-friends'/>

					<Item icon='user-ninja'/>

					<Item icon='user-minus'/>

				</>}

				{ activeTab === 1 && <>

					<Item icon='server'/>

					<Item icon='keyboard'/>

					<Item icon='mouse'/>

					<Item icon='hdd'/>

					<Item icon='headphones'/>

				</>}

				{ activeTab === 2 &&

					<Item icon='user-tie'/>

				}
			</ItemContainer>
		</Container>
	)
}
