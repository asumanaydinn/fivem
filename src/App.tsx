import { SettingsProvider } from "./contexts/SettingsContext";
import Hud from "./components/pages/hud";

function App() {
  return (
    <SettingsProvider>
      <Hud />
    </SettingsProvider>
  );
}

export default App;
