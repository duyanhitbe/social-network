import { io } from 'socket.io-client';
import { getToken } from './localStorage.helper';

const socket = io('http://localhost:3000/chat', {
	extraHeaders: {
		Authorization: `Bearer ${getToken()}`,
	},
});

export default socket;
