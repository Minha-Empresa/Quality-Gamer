import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCards } from '../../../../services/api'
import { Container } from './styles'

export default function Cards(props) {
	const [loading, setLoading] = useState(false)
	const cards = useSelector(state => state.cards)
	const sideEffect = props.sideEffect
	const dispatch = useDispatch()

	useEffect(() => {
		console.log('effect')
		if (cards.length !== 0) return
		loadCards()
	}, [cards.length])

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
							animateOut(card, choice)
						}}>
							<p>{choice.text}</p>
						</button>
					})}
				</div>
			</Container>)
		)
	)

	async function loadCards() {
		setLoading(true)
		const response = await getCards()
		dispatch({
			type: 'LOAD_CARDS',
			cards: response
		})
		setLoading(false)
		console.log(cards)
	}

	function animateOut(card, choice) {
		if (card.animatingOut) return
		card.animatingOut = true
		sideEffect(choice.sideEffect)
		setTimeout(() => {
			dispatch({
				type: 'DELETE_CARD',
				card
			})
			if (cards.length === 1) loadCards()
		}, 1000)
	}
}
