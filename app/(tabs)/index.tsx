import { Launches } from '@/components/Launches';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app",
  cache: new InMemoryCache()
});

export default function HomeScreen() {
  return (
    <ApolloProvider client={client}>
      <Launches />
    </ApolloProvider>
  );
}
