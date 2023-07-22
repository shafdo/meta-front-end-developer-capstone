import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Construction from './pages/Construction'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/construction" element={<Construction />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
