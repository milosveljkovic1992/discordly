import { Alert } from '@mui/material';
import { Snackbar } from '@mui/material';

export const AlertNotification = () => {
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open
			onClose={() => {}}
		>
			<Alert severity='info'>Alert Message</Alert>
		</Snackbar>
	);
};
