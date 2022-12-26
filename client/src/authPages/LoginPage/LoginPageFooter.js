import { useNavigate } from 'react-router-dom';

import { Tooltip } from '@mui/material';

import { CustomPrimaryButton } from '../../shared/components/CustomPrimaryButton';
import { RedirectInfo } from '../../shared/components/RedirectInfo';

const getFormNotValidMessage = () => {
	return 'Enter correct e-mail address and password should contain between 6 and 12 characters';
};
const getFormValidMessage = () => {
	return 'Press to log in';
};

export const LoginPageFooter = ({ handleLogin, isFormValid }) => {
	const navigate = useNavigate();

	const handleNavigateToRegisterPage = () => {
		navigate('/register');
	};

	return (
		<>
			<Tooltip
				title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
			>
				<div>
					<CustomPrimaryButton
						label='Log in'
						additionalStyles={{ marginTop: '30px' }}
						disabled={!isFormValid}
						onClick={handleLogin}
					/>
				</div>
			</Tooltip>
			<RedirectInfo
				text='Need an account? '
				redirectText='Create an account'
				additionalStyles={{ marginTop: '5px' }}
				redirectHandler={handleNavigateToRegisterPage}
			/>
		</>
	);
};
