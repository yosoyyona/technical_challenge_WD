import { Routes, Route, Navigate } from 'react-router-dom'
import PhoneListPage from './pages/PhoneListPage'
import Detail from './components/Detail'

import './App.css'
import axios from 'axios'

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Navigate to="/phones" />} />
        <Route path="/phones" element={<PhoneListPage />} />
        <Route path="/phones/:id" element={<Detail />} />
        <Route />
      </Routes>
      
    </div>
  )
}

export default App
