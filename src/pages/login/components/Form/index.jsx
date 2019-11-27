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

	const onEnterPress = (e) => {
		if (e.key === 'Enter' && e.shiftKey === false) {
			handleLogin()
		}
	}

	async function handleLogin() {
		try {
			const response = await login(username, password)
			history.push('/game')
		} catch (err) {
			// TODO: handle login error
			console.error(err)
		}
	}

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
					onKeyDown={onEnterPress}
					onChange={event => {
						setUsername(event.target.value)
					}}
				/>
				<TextBox
					secureTextEntry
					name="password"
					type="password"
					placeholder="Password"
					value={password}
					onKeyDown={onEnterPress}
					onChange={event => {
						setPassword(event.target.value)
					}}
				/>
				<LoginButton type="reset" onClick={handleLogin}>Continue</LoginButton>
			</FormBox>
		</Container>
	)
}
