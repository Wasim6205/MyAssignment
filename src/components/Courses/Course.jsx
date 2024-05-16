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
        title: "Learn C++ for strong programming fundamentals",
        border: true
    },
    {
        id: '3',
        course: "Data Structure & Algorithm",
        title: "Learn C++ for strong programming fundamentals",
        border: true
    },
    {
        id: '4',
        course: "Competitive Programming",
        title: "Learn C++ for strong programming fundamentals",
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