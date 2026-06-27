import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BedPage from "./BedPage";
import SofaPage from "./SofaPage";
import DiningPage from "./DiningPage";
import ChairPage from "./ChairPage";
import WardrobePage from "./WardrobePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beds" element={<BedPage />} />
        <Route path="/sofa" element={<SofaPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/chair" element={<ChairPage />} />
        <Route path="/wardrobe" element={<WardrobePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;