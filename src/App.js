import { BrowserRouter, Route, Routes } from "react-router-dom";
import Documentation from "./pages/Documentation";
import Filteres from "./pages/Filteres";
import Show from "./pages/Show";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Filteres />} />
        <Route path="/show" element={<Show />} />
        <Route path="/doc" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
