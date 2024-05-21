import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Pet } from './Pet';
import { PetEasyToFix } from './PetEasyToFix';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: 0,
      retryOnMount: false,
    },
    mutations: {
      retry: false,
      gcTime: 0,
    },
  },
});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Pet</h1>
      <Pet petId={1} />
      <hr></hr>
      <h1>Pet (easy to fix)</h1>
      <PetEasyToFix petId={2} />
    </QueryClientProvider>
  );
}

export default App;
