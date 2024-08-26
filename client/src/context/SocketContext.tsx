import { EventKey } from '@app/constants/socket.constant';
import { useGetAllRoomQuery } from '@app/graphql/generated';
import { useSocket } from '@app/hooks/useSocket';
import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';

type ContextType = {
	socket: Socket | undefined;
};

export const SocketContext = React.createContext<ContextType>({
	socket: undefined,
});

type Props = PropsWithChildren<{}>;

export function SocketProvider({ children }: Props) {
	const { refetch } = useGetAllRoomQuery();
	const socket = useSocket();

	useEffect(() => {
		if (socket) {
			socket.on(EventKey.FETCH_ROOM, () => {
				refetch();
			});
		}
	}, [socket, refetch]);

	return (
		<SocketContext.Provider
			value={{
				socket,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
}

export const useSocketContext = () => useContext(SocketContext);
