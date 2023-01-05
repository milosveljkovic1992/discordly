import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = () => {
	socket = io('http://localhost:8000');

	socket.on('connect', () => {
		console.log('succesfully connected with socket.io server');
		console.log(socket.id);
	});
};