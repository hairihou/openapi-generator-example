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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pet petId={1} />
      <hr></hr>
      <PetEasyToFix petId={2} />
    </QueryClientProvider>
  );
}

export default App;
