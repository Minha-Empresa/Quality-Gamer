import styled from 'styled-components'

export const Container = styled.div`
	background-color: #f5f5f5;
	width: 100%;
	height: 100vh;
	overflow: hidden;

	.left {
		width: 70%;
		flex-direction: column;
    }
    
    .right {
        background-color: #fff;
        width: 30%;
        flex-direction: column;
        box-shadow: -2px 0px 6px #00000010;
    }
`
