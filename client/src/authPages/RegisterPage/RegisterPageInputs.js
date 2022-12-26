import { InputWithLabel } from '../../shared/components/InputWithLabel';

export const RegisterPageInputs = ({
	mail,
	setMail,
	username,
	setUsername,
	password,
	setPassword,
}) => {
	return (
		<>
			<InputWithLabel
				value={mail}
				setValue={setMail}
				label='E-mail address'
				type='text'
				placeholder='Enter e-mail address'
			/>
			<InputWithLabel
				value={username}
				setValue={setUsername}
				label='Username'
				type='text'
				placeholder='Enter username'
			/>
			<InputWithLabel
				value={password}
				setValue={setPassword}
				label='Password'
				type='password'
				placeholder='Enter password'
			/>
		</>
	);
};
