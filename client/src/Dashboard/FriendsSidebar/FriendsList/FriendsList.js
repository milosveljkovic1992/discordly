import { styled } from '@mui/system';
import { FriendsListItem } from './FriendsListItem';

const DUMMY_FRIENDS = [
	{
		id: 1,
		username: 'John',
		isOnline: true,
	},
	{
		id: 2,
		username: 'Jane',
		isOnline: false,
	},
	{
		id: 3,
		username: 'Jake',
		isOnline: false,
	},
];

const MainContainer = styled('div')({
	flexGrow: 1,
	width: '100%',
});

export const FriendsList = () => {
	return (
		<MainContainer>
			{DUMMY_FRIENDS.map(({ id, username, isOnline }) => (
				<FriendsListItem
					key={id}
					username={username}
					id={id}
					isOnline={isOnline}
				/>
			))}
		</MainContainer>
	);
};
