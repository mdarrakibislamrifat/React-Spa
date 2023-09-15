/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Bookmark = ({bookmark}) => {
    const {course_name}=bookmark;
    return (
        
        <div className='shadow-2xl rounded-xl ml-10'>
            
           
           <div>
           <ol>
           <li key={bookmark.id} className='list-decimal'>{course_name}</li>
           </ol>
           </div>
           
            
        </div>
    );
};

export default Bookmark;