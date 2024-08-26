import { cookies } from 'next/headers';

export function getTokenAction() {
	const cookieStore = cookies();
	return cookieStore.get('access_token')?.value;
}
