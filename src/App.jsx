 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomeLayout from './Pages/HomeLayout'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Blog1 from "./Pages/Blog1";
import Blog2 from "./Pages/Blog2";
import Blog3 from "./Pages/Blog3";
import Blog4 from "./Pages/Blog4";
import Blog5 from "./Pages/Blog5";


function App() {


  return (
    <>
   
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} /> 
          <Route path="blogs" element={<Blogs />} >
          </Route> 

        </Route>
        <Route path="blog1" element={<Blog1/> } />
          <Route path="blog2" element={<Blog2 />} />
          <Route path="blog3" element={<Blog3 />} />
          <Route path="blog4" element={<Blog4 />} />
          <Route path="blog5" element={<Blog5 />} />
      </Routes>
   
   </>
  )
}

export default App
