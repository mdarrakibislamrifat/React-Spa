
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

 
  return (
    <>
      <Header></Header>
      
      <div className='md:flex max-w-7xl mx-auto'>
      <Courses></Courses>
      <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
