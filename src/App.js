import React from "react";
import Header from "./components/inc/Header";
import Footer from "./components/inc/Footer";
import Home from "./layouts/Home";
import JobsMain from "./pages/jobs/JobsMain";
import Jobs from "./pages/jobs/Jobs";
import Experiences from "./pages/experiences/Experiences";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from 'react-router-dom';
import AutoScrollTop from './components/AutoScrollTop';

function App() {
  return (
    <div className="dark:bg-customPrimary-900 bg-white min-h-screen">
      <Header />
      <AutoScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deneyimlerim" element={<Experiences />} />
        <Route exact path="/calismalarim" element={<JobsMain />}>
          <Route path=":jobname" element={<Jobs />} />
        </Route>
        <Route path="/hakkimda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
