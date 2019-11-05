import React, { useState } from 'react'

import { Container } from './styles'

export default function Cards(props) {
	const [cards, setCards] = useState(props.cards.map(card => ({ ...card, animatingOut: false })).reverse())
	const sideEffect = props.sideEffect

	return (
		cards.map((card, index) => (
			<Container
				zIndex={index}
				key={index}
				animatingOut={card.animatingOut}
			>
				<img className="image" src="assets/dev.jpg" alt="imagem" />
				<div className='body'>
					<p>{card.details}</p>
				</div>
				<div className='buttons'>
					{card.choices.map((choice, buttonIndex) => {
						return <button key={buttonIndex} onClick={() => {
							if (card.animatingOut) return
							card.animatingOut = true
							sideEffect(choice.sideEffect)
							setTimeout(() => {
								setCards(cards.filter((item) => item !== card))
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
