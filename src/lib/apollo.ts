import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8dwu7182f01xidzen9h9x/master',
	cache: new InMemoryCache(),
});
