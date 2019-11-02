import styled from 'styled-components'

export const Container = styled.div`
	flex-direction: column;
	position: relative;
	width: 100%;
	height: 100vh;
    margin: 0px auto;
    padding: 20px 40px 40px;
    background-size: cover;
    background-color: #292b2c;
    text-align: center;
`

export const Avatar = styled.img`
	width: 180px;
	height: 180px;
	margin: 10px auto 30px;
	border-radius: 100%;
	border: 2px solid #aaa;
	background-image: url("assets/avatar.png");
	background-size: cover;
	background-color: lightblue;
`

export const Output = styled.div`
	position: absolute;
    width: 300px;
    top: -75px;
    left: 0;
	color: #fff;

	background: ${props => {
		if (props.success) return 'rgb(25, 204, 25)'
		else if (props.error) return 'rgb(228, 105, 105)'
		else return 'rgb(255, 255, 255)'
	}
};
`
export const TextBox = styled.input`
    background-color: #FFF;
    margin-top: 10;
    font-size: 15;
    width: 75%;
	height: 45;
    text-align: center;
    border-width: 2;
    border-radius: 20;
	width: 100%;
	padding: 4px;
	text-align: center;
	height:30px;
	border: none;
	border-bottom: 2px solid goldenrod;
	background: goldenrod;
	transition:0.2s ease-in-out;

		&:focus {
			outline: 0;
    		background: goldenrod;
    		color: white;
		}

		&[type="text"] {
			background-color: transparent;
      		font-size: 14px;
      		color: white;
      		font-weight: bold;
      		font-family: sans-serif;
		}

		&[type="text"] {
			border-radius: 6px 6px 5px 5px;
			margin-top: 5px;
			background-color: transparent;
			font-size: 16px;
			color: white;
			font-weight: bold;
			font-family: sans-serif;
		}
`

export const LoginButton = styled.button`
    width: 200px;
    height: 40;
    border-color: #fff;
    border-width: 1;
    border-radius: 20;
    background-color: #00ad9f;
    justify-content: center;
    align-self: center;
	margin-bottom: 30;
	margin-top: 36px;
`

export const FormBox = styled.div`
	flex-direction: column;

	button {
		border-radius: 6px 6px 5px 5px;
        border: 2px solid #ccc;
        margin-top:15px;
        padding: 8px 18px;
        background-color: goldenrod;
        font-size: 16px;
        color: black;
        font-weight: bold;
        font-family: sans-serif;
	}
`
