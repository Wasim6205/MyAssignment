import React from 'react'
import './Refund.css'
import { CiClock2 } from "react-icons/ci";

const Refund = () => {
  return (
    <section className='refund'>
        <h3>Don't miss out on this <span>limited-time opportunity</span> to learn for <span>free!</span></h3>
        <div className='refund-card'>
            <h4>100% Refund Offer</h4>
            <div className='input'>
                <label>20 Seats Left</label>
                <input type="range" />
            </div>
            <p><CiClock2/> Offer ends in 10:00Mins</p>
        </div>
    </section>
  )
}

export default Refund