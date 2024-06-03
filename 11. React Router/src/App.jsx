import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Cources from './components/Cources'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<About/>} path='/about'/>
      <Route element={<Cources/>} path='/cources'/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
