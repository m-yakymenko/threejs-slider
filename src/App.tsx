import './App.css'
import { CatsSwiper } from './CatsSwiper'
import { CanvasS } from './canvas'
import { useDownloadCats } from './hooks/useDownloadCats'

function App() {
  useDownloadCats()
  return (
    <>
      <CatsSwiper />

      <div
        style={{
          width: '300px', height: '300px'
        }}
      >
        <CanvasS />
      </div>
    </>
  )
}

export default App
