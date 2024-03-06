import { SettingsProvider } from "./contexts/SettingsContext";
import Hud from "./components/pages/hud";
import { MusicPlayerProvider } from "./contexts/MediaContext";

function App() {
  return (
    <SettingsProvider>
      <MusicPlayerProvider>
        <div className="h-screen w-screen">
          <Hud />
        </div>
      </MusicPlayerProvider>
    </SettingsProvider>
  );
}

export default App;
