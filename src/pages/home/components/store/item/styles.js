import styled from 'styled-components'

export const Container = styled.div`

	display: flex;
	flex-direction: column;
	background-color: #f5f5f5;
	border-width: 1px;
	border-color: #b5b5b5;
	border-radius: 20%;
	border-style: solid;
	margin: 6px 11px;
	transition: all 0.4s;

	&:hover {
		background: #fff;
		border-color: black;

		.icon, h1, h6 {
			color: black;
		}
	}

  	.icon {
		color: #666;
		font-size: 50px;
		padding: 10px;
		margin: auto;
  	}

`

export const PriceContainer = styled.div`
	color: #666;
	margin: 0 10px;
	padding: 5px;
	font-size: 0.6em;
	display: flex;

	h1 {
		margin: auto;
	}
`

export const NameContainer = styled.div`
	color: #666;
	margin: 0 10px;
	padding: 5px;
	display: flex;

	h6 {
		display: inline;
		margin: 0 auto;
		font-size: 1em;
	}
`
