import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Container } from './styles'

export default function TutorialCarousel() {
	return (
		<Container>
			<Carousel
				autoPlay
				infiniteLoop
				showThumbs={false}
				showStatus={false}
			>
				<div>
					<img src="assets/back_form.jpg" alt="tutorial"/>
					<p className="legend">Legend 1</p>
				</div>
				<div>
					<img src="assets/back_form.jpg" alt="tutorial"/>
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img src="assets/back_form.jpg" alt="tutorial"/>
					<p className="legend">Legend 3</p>
				</div>
			</Carousel>
		</Container>
	)
}
