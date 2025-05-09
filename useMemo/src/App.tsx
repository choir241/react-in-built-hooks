import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Ingredients from './components/Ingredients'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Ingredients/>
    </QueryClientProvider>
  )
}