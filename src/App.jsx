import { Routes, Route, Navigate } from 'react-router-dom'
import PhoneListPage from './pages/PhoneListPage'
import PhoneDetailPage from './pages/PhoneDetailPage'
import './App.css'
import axios from 'axios'

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Navigate to="/phones" />} />
        <Route path="/phones" element={<PhoneListPage />} />
        <Route path="/phones/:id" element={<PhoneDetailPage />} />
        <Route />
      </Routes>
      
    </div>
  )
}

export default App
