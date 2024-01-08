import { QueryClient, QueryClientProvider } from "react-query";
import styled, { ThemeProvider } from "styled-components";
import { CanvasS } from "./canvas/canvas";
import { Header } from "./components/Header";
import { CatsSwiper } from "./components/Slider";
import "./styles/App.css";
import { theme } from "./styles/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />
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
