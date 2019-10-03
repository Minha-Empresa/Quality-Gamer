import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container } from './styles'

export default function Navigation() {
	return (
		<Container>
			<FontAwesomeIcon
				className='icon'
				icon={['fas', 'code']}
			/>
			<FontAwesomeIcon
				className='icon'
				icon={['fas', 'users']}
			/>
			<FontAwesomeIcon
				className='icon'
				icon={['fas', 'users-cog']}
			/>
			<FontAwesomeIcon
				className='icon'
				icon={['fas', 'dollar-sign']}
			/>
		</Container>
	)
}
