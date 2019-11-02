import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    width: 100%;
    box-shadow: 0px 4px 6px #00000010;
    justify-content: space-evenly;
    padding: 10px 0px;

    .icon {
        font-size: 50px;
        color: #555;
    }
`

export const BarBorder = styled.div`
	width: 10px;
	height: 50px;
	margin-left: 15px;
`

export const BarFill = styled.div`
	background-color: ${props => props.color};
	height: ${props => props.percentage}%;
	width: 100%;
	transition: all 0.5s;
	margin-top: auto;
`
