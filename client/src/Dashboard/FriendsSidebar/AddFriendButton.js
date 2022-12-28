import { CustomPrimaryButton } from '../../shared/components/CustomPrimaryButton';

const additionalStyles = {
	marginTop: '10px',
	marginLeft: '5px',
	width: '80%',
	height: '30px',
	backgroundColor: '#3BA55D',
};

export const AddFriendButton = () => {
	const handleOpenAddFriendDialog = () => {};

	return (
		<>
			<CustomPrimaryButton
				additionalStyles={additionalStyles}
				label='Add friend'
				onClick={handleOpenAddFriendDialog}
			/>
		</>
	);
};

export default AddFriendButton;
