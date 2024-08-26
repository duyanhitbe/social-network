import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache } from '@apollo/client';
import { getToken } from '@app/helpers/localStorage.helper';

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql', credentials: 'include' });

const authMiddleware = new ApolloLink((operation, forward) => {
	const token = getToken();
	operation.setContext({
		headers: {
			authorization: token ? `Bearer ${token}` : '',
		},
	});
	return forward(operation);
});

export const client = new ApolloClient({
	link: concat(authMiddleware, httpLink),
	cache: new InMemoryCache(),
});
