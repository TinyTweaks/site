import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import Settings from './Settings.jsx'
import Apps from './Apps.jsx'
import Home from './Home.jsx'
import './App.css'

export const LightMode = createContext()

const App = () => {
  const [modeState, setModeState] = useState(false)

  return (
     <LightMode.Provider value={[ modeState, setModeState ]}>
        <Routes>
            <Route path="/site" element={<Home />}/>
            <Route path="/site/settings" element={<Settings />} />
            <Route path="/site/apps" element={<Apps />} />
        </Routes>
     </LightMode.Provider>
  );
}

export default App;