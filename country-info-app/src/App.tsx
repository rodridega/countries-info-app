
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { CountryDetail } from './pages/CountryDetail/CountryDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryCode" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
