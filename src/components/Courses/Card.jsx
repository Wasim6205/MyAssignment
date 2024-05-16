import React from 'react'
import './Course.css'
import { IoEyeOutline } from "react-icons/io5";

const Card = ({course}) => {
  return (
    <div className={`card ${course.border && 'border'}`} >
        <div>
            <h3>{course.course}</h3>
            <p>{course.title}</p>
        </div>
        <button className='button'><IoEyeOutline/> View Curriculum</button>
    </div>
  )
}

export default Card