import React from 'react'
import './Course.css'
import Card from './Card'

const courses = [
    {
        id: '1',
        course: "C++",
        title: "Learn C++ for strong programming fundamentals",
        border: true
    },
    {
        id: '2',
        course: "MERN Stack",
        title: "Master the MERN stack for high-demand projects.",
        border: true
    },
    {
        id: '3',
        course: "Data Structure & Algorithm",
        title: "Excel in Data Structures and Algorithms for interview success.",
        border: true
    },
    {
        id: '4',
        course: "Competitive Programming",
        title: "Excel in Data Structure and Algorithms for interview success.",
    },
]

const Course = () => {
  return (
    <section className='courses'>
        <p className='title'>DATASCIENCE COURSE LEARNING PATH</p>
        <h2 className='heading'><span>Data Science</span> Course Curriculum</h2>
        <div className='course'>
            {
                courses.map((course) => (
                    <Card key={course.id} course={course} />
                ))
            }
        </div>
    </section>
  )
}

export default Course