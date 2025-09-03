
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout from './Pages/HomeLayout'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'

function App() {
  

  return (
   <>
   
   <Routes>
    <Route index element={<HomeLayout/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/blogs' element={<Blogs/>}/>



   </Routes>
   </>
  )
}

export default App
