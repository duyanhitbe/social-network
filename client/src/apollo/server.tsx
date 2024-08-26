import { HttpLink } from '@apollo/client';
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';
import { getTokenAction } from '@app/actions/getToken.action';

const server = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: 'http://localhost:3000/graphql',
			headers: {
				Authorization: `Bearer ${getTokenAction()}`,
			},
		}),
	});
});

export const { getClient, query, PreloadQuery } = server;
