import { Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import './App.css'

function App() {
   return (
    <div id="container">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;