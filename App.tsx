import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <StatusBar style='light' />
    </>
  );
};

export default App;
