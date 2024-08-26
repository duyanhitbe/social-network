import { cookies } from 'next/headers';

export function getSubAction() {
	const cookieStore = cookies();
	return cookieStore.get('sub')?.value;
}
