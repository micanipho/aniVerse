import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { AnimeProvider } from "./providers/animeProvider";
import Home from "./pages/home";

function App() {
  return (
    
      <AnimeProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<Home />} />
          </Routes>
        </div>
      </AnimeProvider>
  );
}

export default App;
