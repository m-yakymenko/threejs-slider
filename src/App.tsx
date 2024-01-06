import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { CatsSwiper } from './CatsSwiper';
import { CanvasS } from './canvas';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header style={{ height: '100px' }}></header>
      <main className='swiper-wrapper'>
        <CatsSwiper />
        <div className='canvas-wrapper'>
          <CanvasS />
        </div>
      </main>
    </QueryClientProvider>
  )
}

export default App
