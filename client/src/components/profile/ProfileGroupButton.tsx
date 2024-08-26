'use client';

import { useLogoutUserMutation } from '@app/graphql/generated';
import { Stack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FaCog, FaLock, FaSignOutAlt, FaUser } from 'react-icons/fa';
import ProfileButton from './ProfileButton';

export default function ProfileGroupButton() {
	const [mutate] = useLogoutUserMutation();
	const router = useRouter();
	const toast = useToast();

	const onLogout = () => {
		mutate({
			onCompleted() {
				localStorage.removeItem('access_token');
				router.replace('/login');
			},
			onError({ message }) {
				toast({
					status: 'error',
					description: message,
				});
			},
		});
	};

	return (
		<Stack
			spacing="1rem"
			mt="2rem"
		>
			<ProfileButton
				icon={FaUser}
				onClick={() => {}}
			>
				Account Information
			</ProfileButton>
			<ProfileButton
				icon={FaCog}
				onClick={() => {}}
			>
				Settings
			</ProfileButton>
			<ProfileButton
				icon={FaLock}
				onClick={() => {}}
			>
				Privacy & Security
			</ProfileButton>
			<ProfileButton
				icon={FaSignOutAlt}
				onClick={onLogout}
			>
				Log Out
			</ProfileButton>
		</Stack>
	);
}
