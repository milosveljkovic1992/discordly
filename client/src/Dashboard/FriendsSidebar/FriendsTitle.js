import { Typography } from '@mui/material';

export const FriendsTitle = ({ title }) => {
	return (
		<Typography
			sx={{
				textTransform: 'uppercase',
				fontSize: '14px',
				color: '#8E9297',
				marginTop: '10px',
			}}
		>
			{title}
		</Typography>
	);
};
