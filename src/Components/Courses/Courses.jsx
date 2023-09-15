/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setCourses(data))
    },[])
  
    
    return (
        <div className='md:w-80% grid grid-cols-3 my-4'>
            
            {
                courses.map(course=><Course key={course.id} course={course}></Course>)
            }
            
        </div>
    );
};

export default Courses;