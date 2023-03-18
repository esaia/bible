import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filter from "./pages/Filter";
import Filteres from "./pages/Filteres";
import Show from "./pages/Show";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Filter />} />
        <Route path="/filter" element={<Filteres />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
