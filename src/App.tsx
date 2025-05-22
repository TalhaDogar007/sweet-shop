import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';

import './App.scss'



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product/:id" element={<Product />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
