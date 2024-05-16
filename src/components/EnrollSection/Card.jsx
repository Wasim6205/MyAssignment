import React from 'react'
import { CiPhone } from "react-icons/ci";
import './Enroll.css'


const Card = ({bgColor}) => {
  return (
    <div className={`enroll-card ${bgColor == 'lightPink' ? 'light' : 'dark'}`}>
        <div className='left'>
            <h4>Enroll For DataScience Bundle @₹1,499 <span className='strike'><strike>₹2600</strike></span></h4>
            <p>Become an Expert in the data science field by enrolling into 6 Extensive courses</p>
            <button><CiPhone/> Enroll Now</button>
        </div>
        <div className='right'>
            <div className='right-sec'>
                <p>Total number of Courses</p>
                <h6>6</h6>
            </div>
            <div className='right-sec'>
                <p>Total number of Certificates</p>
                <h6>6</h6>
            </div>
            <div className='right-sec'>
                <p>Access to Courses</p>
                <h6>Lifetime</h6>
            </div>
        </div>
    </div>
  )
}

export default Card