import { Route, Routes } from 'react-router-dom'
import Documentation from './pages/Documentation'
import Filteres from './pages/Filteres'
import Show from './pages/Show'
import { useBibleSettingContext } from './context/BibleSettingProvider'

function App() {
  const { darkMode } = useBibleSettingContext()
  return (
    <div>
      <div className={`${darkMode && 'dark'} font-banner  `}>
        <div className=" dark:bg-[#101828] ">
          <Routes>
            <Route path="/" element={<Filteres />} />
            <Route path="/show" element={<Show />} />
            <Route path="/doc" element={<Documentation />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
