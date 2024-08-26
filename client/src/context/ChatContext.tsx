import { EventKey } from '@app/constants/socket.constant';
import { Message, useGetAllMessageByRoomQuery, useGetAllRoomQuery } from '@app/graphql/generated';
import { getUserId } from '@app/helpers/localStorage.helper';
import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useSocketContext } from './SocketContext';

type ContextType = {
	messages: Message[];
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
	handleSendMessage: () => void;
	newMessage: string;
	setNewMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const ChatContext = React.createContext<ContextType>({
	messages: [],
	setMessages: () => {},
	handleSendMessage: () => {},
	newMessage: '',
	setNewMessage: () => {},
});

type Props = PropsWithChildren<{
	roomId: string;
}>;

export function ChatProvider({ children, roomId }: Props) {
	const { refetch: refetchRoom } = useGetAllRoomQuery();
	const { data: messageData } = useGetAllMessageByRoomQuery({ variables: { roomId } });
	const userId = getUserId();
	const { socket } = useSocketContext();
	const [messages, setMessages] = useState<Message[]>([]);
	const [newMessage, setNewMessage] = useState('');

	const handleSendMessage = () => {
		const text = newMessage.trim();

		if (text && socket) {
			socket.emit(EventKey.SEND_MESSAGE, { roomId, text });
			setNewMessage('');
		}
	};

	useEffect(() => {
		if (messageData?.getAllMessageByRoom.data) {
			setMessages([...(messageData.getAllMessageByRoom.data as any[])]);
		}
	}, [messageData?.getAllMessageByRoom.data]);

	useEffect(() => {
		if (!socket) return;

		const newMessageKey = EventKey.NEW_MESSAGE + '/' + roomId;
		socket.on(newMessageKey, (message: Message) => {
			message.isOwnMessage = message.userId === userId;
			setMessages([...messages, message]);
			refetchRoom();
		});

		const cleanup = () => {
			socket.off(EventKey.NEW_MESSAGE);
		};

		return cleanup;
	}, [roomId, socket, messages, userId, refetchRoom]);

	return (
		<ChatContext.Provider
			value={{
				messages,
				setMessages,
				handleSendMessage,
				newMessage,
				setNewMessage,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
}

export const useChatContext = () => useContext(ChatContext);
