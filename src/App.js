import React from "react";
import Header from "./components/inc/Header";
import Footer from "./components/inc/Footer";
import Home from "./layouts/Home";
import Jobs from "./pages/jobs/Jobs";
import Experiences from "./pages/experiences/Experiences";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="dark:bg-customPrimary-900 bg-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/deneyimlerim" element={<Experiences />}/>
        <Route path="/calismalarim" element={<Jobs />}>
          <Route path="doktoruzman"  />
        </Route>
        <Route path="/hakkimda" element={<About />}/>
        <Route path="/iletisim" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
