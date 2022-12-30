import { Box } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';

export const OnlineIndicator = () => {
	return (
		<Box
			sx={{
				color: '#3BA55D',
				display: 'flex',
				alignItems: 'center',
				position: 'absolute',
				right: '5px',
			}}
		>
			<FiberManualRecord />
		</Box>
	);
};
