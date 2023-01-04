import React from 'react';

import { Box, IconButton } from '@mui/material';
import { Check } from '@mui/icons-material';
import { Clear } from '@mui/icons-material';

export const InvitationDecisionButtons = ({
	disabled,
	acceptInvitationHandler,
	rejectInvitationHandler,
}) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<IconButton
				style={{ color: 'white' }}
				disabled={disabled}
				onClick={acceptInvitationHandler}
			>
				<Check />
			</IconButton>
			<IconButton
				style={{ color: 'white' }}
				disabled={disabled}
				onClick={rejectInvitationHandler}
			>
				<Clear />
			</IconButton>
		</Box>
	);
};
