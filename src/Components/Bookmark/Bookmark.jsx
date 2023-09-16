/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Bookmark = ({ bookmark,index }) => {
  const { course_name } = bookmark;
  return (
    <div className="shadow-2xl rounded-xl ml-10">
      <ol className="text-start font-medium">
        <li>{index}.{course_name}</li>
      </ol>
    </div>
  );
};

export default Bookmark;
