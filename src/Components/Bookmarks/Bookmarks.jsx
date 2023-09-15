/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,creditHour}) => {
    return (
        <div className='md:w-20% ml-4 bg-slate-100 p-4'>
            <div>
                <h2 className="text-xl font-semibold">Total Credit Hour: {creditHour}hr</h2>
            </div>
            <h1 className='text-3xl text-center p-4 font-semibold'>Course Name</h1>
            {
                bookmarks.map(bookmark=><Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;