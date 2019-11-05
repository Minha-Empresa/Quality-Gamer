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
import { login } from '../../../../services/api'

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
				<LoginButton type="reset" onClick={handleLogin}>Continue</LoginButton>
			</FormBox>
		</Container>
	)

	async function handleLogin() {
		try {
			await login(username, password)
			history.push('/game')
		} catch (err) {
			// TODO: handle login error
			console.log(err)
		}
	}
}
