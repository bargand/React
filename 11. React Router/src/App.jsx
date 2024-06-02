import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<About/>} path='/about'/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
