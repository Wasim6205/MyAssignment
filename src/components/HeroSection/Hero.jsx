import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineStarOutline } from "react-icons/md";
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-caption'><RiGraduationCapFill /><h6>An <span>IIT Delhi Alumini initiative</span></h6></div>
        <h3 className='hero-heading'>Become an Expert in the field of <span>Data Science with 6 courses</span></h3>
        <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
        <div className='btn-group-1'>
            <button><MdOutlineStarOutline fontSize={20}/> Personal Mentorship</button>
            <button><MdOutlineStarOutline fontSize={20}/> Internship Assistance</button>
            <button><MdOutlineStarOutline fontSize={20}/> Industry Certified Courses</button>
        </div>
        <div className='btn-group-2'>
            <button className='primary'>Enroll Now <PiTelegramLogo fontSize={20}/></button>
            <button className='secondary'>Know More <AiOutlineQuestionCircle fontSize={20}/></button>
        </div>
    </div>
  )
}

export default Hero