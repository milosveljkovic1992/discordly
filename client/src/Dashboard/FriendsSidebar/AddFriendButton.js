import { useState } from 'react';

import { CustomPrimaryButton } from '../../shared/components/CustomPrimaryButton';
import { AddFriendDialog } from './AddFriendDialog';

const additionalStyles = {
	marginTop: '10px',
	marginLeft: '5px',
	width: '80%',
	height: '30px',
	backgroundColor: '#3BA55D',
};

export const AddFriendButton = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleOpenAddFriendDialog = () => {
		setIsDialogOpen(true);
	};

	const handleCloseAddFriendDialog = () => {
		setIsDialogOpen(false);
	};

	return (
		<>
			<CustomPrimaryButton
				additionalStyles={additionalStyles}
				label='Add friend'
				onClick={handleOpenAddFriendDialog}
			/>
			<AddFriendDialog
				isDialogOpen={isDialogOpen}
				closeDialogHandler={handleCloseAddFriendDialog}
			/>
		</>
	);
};
