import ProfileGroupButton from '@app/components/profile/ProfileGroupButton';
import ProfileHeader from '@app/components/profile/ProfileHeader';
import { UserGetMeDocument, UserGetMeQuery } from '@app/graphql/generated';
import { query } from '../../apollo/server';

export default async function Page() {
	const { data } = await query<UserGetMeQuery>({
		query: UserGetMeDocument,
	});

	return (
		<>
			<ProfileHeader user={data.userGetMe as any} />
			<ProfileGroupButton />
		</>
	);
}
