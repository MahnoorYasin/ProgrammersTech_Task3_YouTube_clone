import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import Videos from "./pages/Videos/Videos"

const App = () => {
  const [sidebar,setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element ={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element ={<Videos/>} />
      </Routes>
    </div>
  )
}

export default App