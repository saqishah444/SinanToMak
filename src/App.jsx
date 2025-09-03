 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomeLayout from './Pages/HomeLayout'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'


function App() {


  return (
    <>
   
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} /> 
          <Route path="blogs" element={<Blogs />} /> 
        </Route>
      </Routes>
   
   </>
  )
}

export default App
