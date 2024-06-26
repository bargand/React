import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import User from './components/User'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></>
    },
    {
      path: '/about',
      element: <><Navbar/><About/></>

    },
    {
      path: '/login',
      element: <><Navbar/><Login/></>
    },
    {
      path: '/login/:username',
      element: <><Navbar/><User/></>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
