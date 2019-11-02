import React from 'react'

import { Container } from './styles'

export default function Cards(props) {
	return (
		<Container>
			<div className='image'></div>
			<div className='body'>
				<p>{props.details}</p>
			</div>
			<div className='buttons'>
				{props.choices.map((choice) => {
					return <button onClick={() => {
						animateOut()
						props.sideEffect(choice.sideEffect)
					}}>
						<p>{choice.text}</p>
					</button>
				})}
			</div>
		</Container>
	)

	function animateOut() {

	}
}
