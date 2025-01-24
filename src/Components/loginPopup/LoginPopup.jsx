import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setShowlogin}) => {
    const [currState, setCurrState] = useState("login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=> setShowlogin(false)} src={assets.cross_icon2} alt="" />
            </div>
            <div className="login-popup-inputs">
               {currState==="login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Input your email' required />
                <input type="password" placeholder='Iput your password' required />
            </div>
            <button>{currState==="sign up"?"create account":"login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms and conditions</p>
            </div>
            {currState==="login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("sign up")}>Click here</span> </p>
            :<p>Already have an account? <span onClick={()=>setCurrState("login")}>Login</span> </p>
            }
        </form>
    </div>
  )
}

export default LoginPopup