import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { CatsSwiper } from "./Slider";
import { CanvasS } from "./canvas/canvas";
import { useCatstore } from "./store/store";
import "./styles/App.css";
import { theme } from "./styles/theme";

const queryClient = new QueryClient();

function App() {
  const { setShowMeshes, showMeshes } = useCatstore();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <header style={{ height: "100px" }}>
          <button onClick={() => setShowMeshes(!showMeshes)}>
            Show meshes
          </button>
        </header>
        <main className="swiper-wrapper">
          <CatsSwiper />
          <CanvasS />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
