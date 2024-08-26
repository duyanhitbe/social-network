'use client';

import { ApolloProvider } from '@apollo/client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { client } from '../apollo/client';
import { queryClient } from './query';
import { theme } from './theme';

export function Providers({ children }: PropsWithChildren) {
	return (
		<ApolloProvider client={client}>
			<QueryClientProvider client={queryClient}>
				<CacheProvider>
					<ChakraProvider theme={theme}>{children}</ChakraProvider>
				</CacheProvider>
			</QueryClientProvider>
		</ApolloProvider>
	);
}
