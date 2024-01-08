import { QueryClient, QueryClientProvider } from "react-query";
import styled, { ThemeProvider } from "styled-components";
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
        <header style={{ height: "10vh", position: "relative", zIndex: 1 }}>
          <button onClick={() => setShowMeshes(!showMeshes)}>
            Show meshes
          </button>
        </header>
        <MainWrapper>
          <CatsSwiper />
        </MainWrapper>
        <CanvasS />
        <ImageFsWrapperPortal id="image-fs-wrapper-portal" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

const MainWrapper = styled.main`
  position: relative;
  cursor: grab;
  z-index: 1;
`;

const ImageFsWrapperPortal = styled.div`
  inset: 0;
  position: absolute;
`;
