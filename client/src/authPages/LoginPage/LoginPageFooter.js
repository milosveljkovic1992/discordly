import { useNavigate } from 'react-router-dom';

import { CustomPrimaryButton } from '../../shared/components/CustomPrimaryButton';
import { RedirectInfo } from '../../shared/components/RedirectInfo';

export const LoginPageFooter = ({ handleLogin, isFormValid }) => {
	const navigate = useNavigate();

	const handlePushToRegisterPage = () => {
		navigate('/register');
	};

	return (
		<>
			<div>
				<CustomPrimaryButton
					label='Log in'
					additionalStyles={{ marginTop: '30px' }}
					disabled={!isFormValid}
					onClick={handleLogin}
				/>
			</div>
			<RedirectInfo
				text='Need an account? '
				redirectText='Create an account'
				additionalStyles={{ marginTop: '5px' }}
				redirectHandler={handlePushToRegisterPage}
			/>
		</>
	);
};
