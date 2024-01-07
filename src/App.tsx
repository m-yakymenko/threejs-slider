import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { CatsSwiper } from "./CatsSwiper";
import { useCatstore } from "./store/store";

const queryClient = new QueryClient();

function App() {
  const { setShowMeshes, showMeshes } = useCatstore();

  return (
    <QueryClientProvider client={queryClient}>
      <header style={{ height: "100px" }}>
        <button onClick={() => setShowMeshes(!showMeshes)}>Show meshes</button>
      </header>
      <main className="swiper-wrapper">
        <CatsSwiper />
      </main>
    </QueryClientProvider>
  );
}

export default App;
