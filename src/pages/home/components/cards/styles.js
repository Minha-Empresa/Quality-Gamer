import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    min-height: 75%;
    background-color: #fff;
	margin: 0px auto;
    border: 1px solid #00000030;
    border-radius: 40px;
    overflow: hidden;
    flex-direction: column;
	z-index: ${props => props.zIndex};
	transform: translate(${props => {
		if (props.animatingOut) return '-5000px'
		return '0px'
	}}, ${props => props.zIndex * -100}%);

	transition: all 1s;
	opacity: 1;

    .image {
        background-color: #ccc;
        width: 100%;
        height: 50vh;
    }

    .body {
        margin: 30px;
        width: 100%;
        p {
            margin: auto;
            color: #333;
            font-size: 30px;
            font-weight: 500;
        }
    }

    .buttons {
        margin-top: auto;
        width: 100%;

        button {
            flex: 1;
            border: 1px solid #00000010;
			padding: 20px;
			transition: all 0.5s;
			color: #555;
            p {
                font-size: 22px;
                font-weight: 400;
                margin: 0px auto;
			}
			
			&:hover {
				background-color: #eee;
				color: #333;
			}
        }
    }
`
