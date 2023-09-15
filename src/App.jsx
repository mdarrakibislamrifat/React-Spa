import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  
  const handleAddToBookmark = (course,time) => {
    const newCourse = [...bookmarks, course];
    setCreditHour(creditHour+time)
    setBookmarks(newCourse);
  };
  return (
    <>
      <Header></Header>

      <div className="md:flex max-w-7xl mx-auto">
        <Courses handleAddToBookmark={handleAddToBookmark}></Courses>
        <Bookmarks creditHour={creditHour} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
