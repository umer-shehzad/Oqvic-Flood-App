import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx';
import InfoPage from "./pages/InfoPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flood-info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
