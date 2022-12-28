import { useEffect, useState } from 'react';

import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
} from '@mui/material';

import { validateMail } from '../../shared/utils/validators';
import { InputWithLabel } from '../../shared/components/InputWithLabel';
import { CustomPrimaryButton } from '../../shared/components/CustomPrimaryButton';

export const AddFriendDialog = ({
	isDialogOpen,
	closeDialogHandler,
	sendFriendInvitation = () => {},
}) => {
	const [mail, setMail] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	const handleSendInvitation = (invitation) => {
		// send friend request to server
	};

	const handleCloseDialog = () => {
		closeDialogHandler();
		setMail('');
	};

	useEffect(() => {
		setIsFormValid(validateMail(mail));
	}, [mail, setIsFormValid]);

	return (
		<div>
			<Dialog open={isDialogOpen} onClose={handleCloseDialog}>
				<DialogTitle>
					<Typography>Invite a friend</Typography>
				</DialogTitle>

				<DialogContent>
					<DialogContentText>
						<Typography>
							Enter e-mail address of friend which you would like to invite
						</Typography>
					</DialogContentText>

					<InputWithLabel
						label='mail'
						type='text'
						value={mail}
						setValue={setMail}
						placeholder='Enter mail address'
					/>
				</DialogContent>

				<DialogActions>
					<CustomPrimaryButton
						onClick={handleSendInvitation}
						disabled={!isFormValid}
						label='Send'
						additionalStyles={{ margin: '0 15px 10px' }}
					/>
				</DialogActions>
			</Dialog>
		</div>
	);
};
