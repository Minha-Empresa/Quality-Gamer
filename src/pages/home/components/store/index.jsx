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

					<Item icon='user-friends' price={100} />

					<Item icon='user-ninja' price={100}/>

					<Item icon='user-minus' price={100}/>

				</>}

				{ activeTab === 1 && <>

					<Item icon='server' price={3490} name="Servidor"/>

					<Item icon='keyboard' price={256} name="Teclado"/>

					<Item icon='mouse' price={134} name="Mouse"/>

					<Item icon='hdd' price={90} name="HDD"/>

					<Item icon='headphones' price={478} name="Fones"/>

				</>}

				{ activeTab === 2 &&

					<Item icon='user-tie' price={100}/>

				}
			</ItemContainer>
		</Container>
	)
}
