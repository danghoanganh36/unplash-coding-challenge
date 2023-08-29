import React from 'react'
import './Components.css'
const logo = require('../assets/unsplash-logo.jpg')

const Logo = () => {
  return (
    <div>
        <img className='logo' src={logo} alt="logo" />
    </div>
  )
}

export default Logo