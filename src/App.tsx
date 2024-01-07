import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { CatsSwiper } from './CatsSwiper';
import { CanvasS } from './canvas/canvas';
import { useCatstore } from './store';

const queryClient = new QueryClient();

function App() {
  const { setShowMeshes, showMeshes } = useCatstore()

  return (
    <QueryClientProvider client={queryClient}>
      <header style={{ height: '100px' }}>
        <button onClick={() => setShowMeshes(!showMeshes)}>Show meshes</button>
      </header>
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
