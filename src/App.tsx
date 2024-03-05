import { SettingsProvider } from "./contexts/SettingsContext";
import Hud from "./components/pages/hud";

function App() {
  return (
    <SettingsProvider>
      <div className="h-screen w-screen">
        <Hud />
      </div>
    </SettingsProvider>
  );
}

export default App;
