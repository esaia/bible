import { Route, Routes } from 'react-router-dom';
import Documentation from './pages/Documentation';
import Filteres from './pages/Filteres';
import Show from './pages/Show';
import { useBibleSettingContext } from './context/BibleSettingProvider';
import useData from './hooks/useData';
import Donate from './pages/Donate';

function App() {
  const { darkMode } = useBibleSettingContext();
  const { fontTitle } = useData();

  return (
    <div>
      <div className={`${darkMode && 'dark'} ${fontTitle} `}>
        <div className=" dark:bg-[#101828] ">
          <Routes>
            <Route path="/" element={<Filteres />} />
            <Route path="/show" element={<Show />} />
            <Route path="/doc" element={<Documentation />} />
            <Route path="/donation" element={<Donate />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
