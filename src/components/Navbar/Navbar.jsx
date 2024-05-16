import React from 'react'
import "./Navbar.css"

const menus = [
    "Overview", "Curriculum", "Refund", "Testimonials"
]

const Navbar = () => {

  return (
    <div className='navbar'>
        <ul className='navlink'>
            {
                menus.map((menu,idx) => (
                    <li key={idx} className={`navitem ${idx=='0' ? 'active' : ''}`}>{menu}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Navbar