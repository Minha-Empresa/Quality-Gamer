import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, BarBorder, BarFill } from './styles'

const Bar = ({ percentage }) => {
	return (
		<BarBorder>
			<BarFill
				color={color(percentage)}
				percentage={percentage}
			/>
		</BarBorder>
	)
}

export default function Navigation({ code, employees, cash, clients }) {
	return (
		<Container>
			<span>
				<FontAwesomeIcon
					className='icon'
					icon={['fas', 'code']}
				/>
				<Bar
					percentage={code}
				/>
			</span>
			<span>
				<FontAwesomeIcon
					className='icon'
					icon={['fas', 'users']}
				/>
				<Bar
					percentage={clients}
				/>
			</span>
			<span>
				<FontAwesomeIcon
					className='icon'
					icon={['fas', 'users-cog']}
				/>
				<Bar
					percentage={employees}
				/>
			</span>
			<span>
				<FontAwesomeIcon
					className='icon'
					icon={['fas', 'dollar-sign']}
				/>
				<Bar
					percentage={cash}
				/>
			</span>
		</Container>
	)
}

function color(value) {
	if (value < 10) return 'darkred'
	if (value < 20) return 'red'
	if (value < 30) return 'orangered'
	if (value < 40) return 'orange'
	if (value < 50) return 'gold'
	if (value < 60) return 'yellow'
	if (value < 70) return 'yellowgreen'
	if (value < 80) return 'lime'
	if (value < 90) return 'chartreuse'
	return 'limegreen'
}
