import { useState } from 'react';

import { Box, Tooltip, Typography } from '@mui/material';
import { Avatar } from '../../../shared/components/Avatar';

export const PendingInvitationsListItem = ({
	id,
	username,
	mail,
	acceptFriendInvitation = () => {},
	rejectFriendInvitation = () => {},
}) => {
	const [buttonsDisabled, setButtonsDisabled] = useState(false);

	const handleAcceptInvitation = () => {
		acceptFriendInvitation({ id });
		setButtonsDisabled(true);
	};

	const handleRejectInvitation = () => {
		rejectFriendInvitation({ id });
		setButtonsDisabled(true);
	};

	return (
		<Tooltip title={mail}>
			<div style={{ width: '100%' }}>
				<Box
					sx={{
						width: '100%',
						height: '42px',
						marginTop: '10px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Avatar username={username} />
					<Typography
						sx={{
							marginLeft: '7px',
							fontWeight: 700,
							color: '#8E9297',
							flexGrow: 1,
						}}
						variant='subtitle1'
					>
						{username}
					</Typography>
				</Box>
			</div>
		</Tooltip>
	);
};
