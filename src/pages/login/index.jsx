import React from 'react'

import Carousel from './components/Carousel'
import Form from './components/Form'
import { Container } from './styles'

export default function LoginScreen() {
	return (
		<Container>
			<Carousel />
			<Form />
		</Container>
	)
}
