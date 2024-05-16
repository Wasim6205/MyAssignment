import React from 'react'
import './Testimonial.css'
import { FaUserGraduate } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className='testi testi1'>
            <FaUserGraduate fontSize={40} color='#B73BBE'/>
            <div>
                <h4>24</h4>
                <p>Courses</p>
            </div>
        </div>
        <div className='testi testi2'>
            <FaUserGraduate fontSize={40} color='#B73BBE'/>
            <div>
                <h4>30k+</h4>
                <p>Learners</p>
            </div>
        </div>
        <div className='testi testi3'>
            <FaUserGraduate fontSize={40} color='#B73BBE'/>
            <div>
                <h4>100k+</h4>
                <p>Doubts Solved</p>
            </div>
        </div>
        <div className='testi testi4'>
            <FaUserGraduate fontSize={40} color='#B73BBE'/>
            <div>
                <h4>10k+</h4>
                <p>Student Projects</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial