import { ApolloClient, InMemoryCache } from '@apollo/client';

console.log(import.meta.env.VITE_API_URL, import.meta.env.VITE_API_ACESS_TOKEN);

export const client = new ApolloClient({
	uri: import.meta.env.VITE_API_URL,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`,
	},
	cache: new InMemoryCache(),
});
