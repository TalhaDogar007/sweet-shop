import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './App.scss'



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={appRoutes.login} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
