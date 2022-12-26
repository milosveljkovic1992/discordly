import { CustomPrimaryButton } from '../../shared/components/CustomPrimaryButton';

export const LoginPageFooter = ({ handleLogin, isFormValid }) => {
	return (
		<div>
			<CustomPrimaryButton
				label='Log in'
				additionalStyles={{ marginTop: '30px' }}
				disabled={!isFormValid}
				onClick={handleLogin}
			/>
		</div>
	);
};
