import React from 'react'

import { Container } from './styles'

export default function Cards(props) {
	const cards = props.cards.map(card => ({ ...card, animatingOut: null })).reverse()
	const sideEffect = props.sideEffect

	return (
		cards.map((card, index) => (
			<Container
				zIndex={index}
				key={index}
				animatingOut={card.animatingOut}
			>
				<div className='image'></div>
				<div className='body'>
					<p>{card.details}</p>
				</div>
				<div className='buttons'>
					{card.choices.map((choice, buttonIndex) => {
						return <button key={buttonIndex} onClick={() => {
							if (card.animatingOut) return
							console.log('animando' + buttonIndex)
							card.animatingOut = buttonIndex
							sideEffect(choice.sideEffect)
							setTimeout(() => {
								cards.pop()
								console.log('fim')
							}, 1000)
						}}>
							<p>{choice.text}</p>
						</button>
					})}
				</div>
			</Container>)
		)
	)
}
