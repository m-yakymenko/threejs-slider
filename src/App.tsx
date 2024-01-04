import './App.css'
import { CatsSwiper } from './CatsSwiper'
import { CanvasS } from './canvas'
import { useDownloadCats } from './hooks/useDownloadCats'

function App() {
  useDownloadCats()
  return (
    <>
      <header style={{ height: '100px' }}></header>
      <main className='swiper-wrapper'>
        <CatsSwiper />
        <div className='canvas-wrapper'
        >
          <CanvasS />
        </div>
      </main>


    </>
  )
}

export default App
