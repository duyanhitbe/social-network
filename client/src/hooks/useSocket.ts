import { getToken } from '@app/helpers/localStorage.helper';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocket = (): Socket | undefined => {
	const [socket, setSocket] = useState<Socket>();

	useEffect(() => {
		const socketIo = io('http://localhost:3000/chat', {
			extraHeaders: {
				Authorization: `Bearer ${getToken()}`,
			},
		});

		setSocket(socketIo as any);

		function cleanup() {
			socketIo.disconnect();
		}
		return cleanup;
	}, []);

	return socket;
};
