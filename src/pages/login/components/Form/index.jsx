import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
	Container,
	Output,
	LoginButton,
	Avatar,
	FormBox,
	TextBox
} from './styles'

export default function Form() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()

	return (
		<Container>
			<Output />
			<Avatar />
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
		</Container>
	)

	function login() {
		history.push('/game')
	}
}
