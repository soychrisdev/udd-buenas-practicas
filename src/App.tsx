import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import BeneficiosPage from "./pages/BeneficiosPage";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BeneficiosPage />
        <select>
          <option value="1">Uno</option>
          <option value="2">Dos</option>
          <option value="3">Tres</option>
        </select>
      </QueryClientProvider>
    </>
  );
}

export default App;
