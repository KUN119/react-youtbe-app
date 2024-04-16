import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchHeader from './components/searchHeader/SearchHeader'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { YoutubeApiProvider } from './context/YoutubeApiContext';

export default function App() {
  
  const queryClient = new QueryClient();

  return (
    <>
      <SearchHeader />
      {/* context 사용 */}
      <YoutubeApiProvider>
        {/* QueryClientProvider 감쌌기 때문에 Outlet 어디서든 useQuery를 사용할 수 있다. */}
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  )
}
