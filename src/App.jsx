import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'  
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './Components/loginPopup/LoginPopup'
import Home from './Pages/Home/home'

const App = () => {

  const [showlogin, setShowlogin] = useState (false)
  return (
    <>
    {showlogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
    <div className='app'>
      < Navbar setShowlogin = {setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>

    <Footer />
    
    
    </>
   
  )
}

export default App