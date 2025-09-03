
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout from './Pages/HomeLayout'
import Home from './Pages/Home'
import Blog from './Pages/Blog'

function App() {
  

  return (
   <>
   
   <Routes>
    <Route index element={<HomeLayout/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog' element={<Blog/>}/>



   </Routes>
   </>
  )
}

export default App
