import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({setShowlogin}) => {

  const [menu,setMenu] = useState ("Home");

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className='navbar'>
     <Link to="/"><img src={assets.AB} alt="" className="logo"  /> </Link>
     <ul className="navbar-menu">
      <Link to="/" onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
      <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
      <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
      <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
     </ul>
     <div className="navbar-right">
      <img src={assets.search_icon} style={{ width: '30px' }} alt="" />
      <div className="navbar-search-icon">
       <Link to="/cart"> <img src={assets.baskket_icon} style={{ width: '30px'}} alt="" /> </Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      <button onClick={()=> setShowlogin(true)}>Sign In</button>
     </div>
    </div>
  )
}

export default Navbar