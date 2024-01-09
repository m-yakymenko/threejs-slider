import { QueryClient, QueryClientProvider } from "react-query";
import styled, { ThemeProvider } from "styled-components";
import { Typography } from "./atoms/Typography";
import { CanvasLayout } from "./canvas/CanvasLayout";
import { Header } from "./components/Header";
import { CatsSlider } from "./components/Slider";
import { theme } from "./styles/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />

        <MainWrapper>
          <CatsSlider />
        </MainWrapper>

        <CanvasLayout />
        <ImageFsWrapperPortal id="image-fs-wrapper-portal" />

        <StyledFooter>
          Fully responsiveness is not impemented yet. Please refresh page after
          resize.
        </StyledFooter>
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

const StyledFooter = styled(Typography)`
  text-align: center;
`;
