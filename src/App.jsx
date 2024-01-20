import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import Project from "./Components/Project";
import Contact from "./Components/Contact"
import {Routes, Route} from "react-router-dom"
import Footer from "./Components/Footer";


const App = () => {
  return(
    <>
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="project" element={<Project/>}/>
          <Route path="contact" element={<Contact/>}/>
        
        </Route>
        {/* <Route path="/" element={<Footer/>}/> */}
      </Routes>
    </div>
    </>
  )
}
export default App;