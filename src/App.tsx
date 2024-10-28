import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import { Menu } from "./Pages/Menu/Menu";
import { ThemeContextProvider } from "./Context/Context";
import { Game } from "./Pages/Game/Game";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/menu" Component={Menu} />
          <Route path="/game" Component={Game} />
        </Routes>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
