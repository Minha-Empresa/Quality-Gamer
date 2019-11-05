import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, PriceContainer, NameContainer } from './styles'

export default function Item(props) {
	return (
		<Container>
			<FontAwesomeIcon
				className='icon'
				icon={['fas', props.icon]}
			/>
			<PriceContainer>
				<h1>${props.price},00</h1>
			</PriceContainer>
			<NameContainer>
				<h6>{props.name}</h6>
			</NameContainer>
		</Container>
	)
}
