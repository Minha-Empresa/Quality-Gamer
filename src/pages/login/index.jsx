import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Modal from './components/Modal'
import {
	Container,
	LoginContainer,
	LoginButton,
	Avatar,
	Output,
	FormBox,
	TextBox,
	ModalButtonContainer
} from './styles'
import backgroundImage from '../../assets/back_form.jpg'

export default function LoginScreen() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [modalOpen, setModalOpen] = useState(false)
	const history = useHistory()

	return (
		<Container>
			<LoginContainer>
				<Output></Output>
				<Avatar></Avatar>
				<FormBox>
					<TextBox
						name="user"
						type="text"
						placeholder="Email"
						value={username}
						onChange={event => {
							setUsername(event.value)
						}}
					/>
					<TextBox
						secureTextEntry
						name="password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={event => {
							setPassword(event.value)
						}}
					/>
					<LoginButton type="reset" onClick={login}>Continue</LoginButton>
				</FormBox>
			</LoginContainer>
			<ModalButtonContainer>
				<p>Show about the game?</p>
				<button type="button" onClick={toggleModal}>Tutorial</button>
			</ModalButtonContainer>
			{ modalOpen && <Modal />}
		</Container>
	)

	function login() {
		history.push('/game')
	}

	function toggleModal() {
		setModalOpen(!modalOpen)
	}
}
