import AppRoutes from "./routes/index";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <DataProvider>
      <AppRoutes />
    </DataProvider>
  );
}

export default App;
