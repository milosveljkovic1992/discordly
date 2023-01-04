import { styled } from '@mui/system';
import { PendingInvitationsListItem } from './PendingInvitationsListItem';

const DUMMY_INVITATIONS = [
	{
		_id: '1',
		senderId: {
			username: 'John',
			mail: 'email@gmail.com',
		},
	},
	{
		_id: '2',
		senderId: {
			username: 'Jane',
			mail: 'email2@gmail.com',
		},
	},
];

const MainContainer = styled('div')({
	width: '100%',
	height: '22%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	overflow: 'auto',
});

export const PendingInvitationsList = () => {
	return (
		<MainContainer>
			{DUMMY_INVITATIONS.map((invitation) => (
				<PendingInvitationsListItem
					key={invitation._id}
					id={invitation.id}
					username={invitation.senderId.username}
					mail={invitation.senderId.mail}
				/>
			))}
		</MainContainer>
	);
};
