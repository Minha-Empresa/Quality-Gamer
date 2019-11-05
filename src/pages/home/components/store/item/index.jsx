import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container } from './styles'

export default function Item(props) {
	return (
		<Container>
			<FontAwesomeIcon
				className='icon'
				icon={['fas', props.icon]}
			/>
		</Container>
	)
}
