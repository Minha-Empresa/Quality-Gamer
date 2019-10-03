import React from 'react'

import { Container } from './styles'

export default function Cards() {
	return (
		<Container>
			<div className='image'></div>
			<div className='body'>
				<p>Seu estagiário Marcos derramou seu café em você</p>
			</div>
			<div className='buttons'>
				<button>
					<p>Xingar e mandar embora</p>
				</button>
				<button>
					<p>Tudo bem</p>
				</button>
			</div>
		</Container>
	)
}
