import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import CartButton from './Components/CartButton'

function App() {
  return (
    <>
      <Navbar/>
      <CartButton/>
      <div className="min-vh-100">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
