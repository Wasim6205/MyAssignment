import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
            <div className='logo'>LOGO</div>
        <div className='btn-group'>
            <button className='header-button-1'>Login</button>
            <button className='header-button-2'>Signup</button>
        </div>
    </div>
  )
}

export default Header