/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [creditRemaining,setCreditRemaining]=useState(0);
  

  const handleAddToBookmark = (course, time) => {
    const existItem = bookmarks.find((item) => item.id == course.id);

    let count = course.course_credit;
    if (existItem) {
      alert("Already Exist");
    } else {
      bookmarks.forEach((item) => {
        count += item.course_credit;
      });
      const creditRemaining=20-count;
      if(count>20){
        alert('Taka Sesh');
      }else{
        setCreditRemaining(creditRemaining)

        const newCourse = [...bookmarks, course];
        setCreditHour(creditHour + time);
        setBookmarks(newCourse);
      }
      
    }
  };
  return (
    <>
      <Header></Header>

      <div className="md:flex max-w-7xl mx-auto">
        <Courses handleAddToBookmark={handleAddToBookmark}></Courses>
        <Bookmarks creditRemaining={creditRemaining} creditHour={creditHour} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
