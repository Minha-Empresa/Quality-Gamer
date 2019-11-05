import styled from 'styled-components'

export const Container = styled.div`

	display: flex;
	flex-direction: column;
	background-color: rgba(0, 0, 0, 0.25);
	border-radius: 20%;
	margin: 6px 11px;

	&:hover {
		background: rgba(50, 50, 50, 0.7);
	}

  	.icon {
		color: white;
		font-size: 50px;
		padding: 10px;
		margin: auto;
		transition: all 0.4s;
  	}

`
export const PriceContainer = styled.div`
	color: white;
	margin: 0 10px;
	padding: 5px;
	font-size: 0.8em;
`
