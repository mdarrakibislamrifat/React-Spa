/* eslint-disable react/prop-types */


const Course = ({course}) => {
    const {img}=course;
    return (
        <div className="">
            <img src={img} alt="" />

        </div>
    );
};

export default Course;