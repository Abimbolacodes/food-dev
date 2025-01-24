import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'


const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br />AB's App </p>
     <div className="ap-download-platforms">
     <img src={assets.google_play} alt="" />
     <img src={assets.app_store} className='image2' alt="" />
     </div>
    </div>
  )
}

export default AppDownload