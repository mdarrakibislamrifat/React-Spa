/* eslint-disable react/prop-types */

import { BsBook } from 'react-icons/bs';
const Course = ({course}) => {
    const {img,course_name,course_details,price,course_credit}=course;
    return (
        <div className='mb-4 mr-4 p-4 text-center w-[312px] h-[402px] shadow-2xl rounded-xl'>
            <img className='w-full' src={img} alt="" />
            <h2 className="text-xl font-semibold ">{course_name}</h2>
            <p>{course_details}</p>
            <div className="flex justify-around items-center mt-2">
            <p>$ Price: {price}</p>
            <span><BsBook></BsBook> </span>
            <p> Credit: {course_credit}</p>
            </div>
            <button className='bg-blue-500 text-white p-3 rounded-xl mt-4 w-full'>Select</button>

        </div>
    );
};

export default Course;