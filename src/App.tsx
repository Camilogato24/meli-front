import { QueryClientProvider } from '@tanstack/react-query';
import './App.sass'
import RoutesComponent from './routes/routes'
import { queryClient } from './query-client';

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RoutesComponent />
    </QueryClientProvider>
  )
}

export default App
