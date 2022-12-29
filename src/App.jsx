import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import './App.css'

const App = () => {
   return (
    <div id="container">
      <Routes>
        <Route path="/site" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;