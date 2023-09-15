import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (course) => {
    const newCourse = [...bookmarks, course];
    setBookmarks(newCourse);
  };
  return (
    <>
      <Header></Header>

      <div className="md:flex max-w-7xl mx-auto">
        <Courses handleAddToBookmark={handleAddToBookmark}></Courses>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
