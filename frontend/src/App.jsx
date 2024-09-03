import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import SigninPage from './pages/SigninPage'
import NoPage from './pages/NoPage'
import DashboardPage from './pages/DashboardPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SigninPage />} />
        <Route path="login" element={<SigninPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
