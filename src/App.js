//CSS Import
import './App.scss';

// React and other imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages import
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Functions from './components/Functions/Functions';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import NotFound from './pages/NotFound/NotFound';
import Preparation from './pages/Preparation/Preparation';
import Quizzes from './pages/Quizzes/Quizzes';
import Signup from "./pages/Signup/Signup";
import GeneralContent from './pages/GeneralContent/GeneralContent';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState (false)
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/quizzes/:subject" element={<Quizzes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/general-content/:subject" element={<GeneralContent />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Functions />
      </BrowserRouter>
    </>
  );
}

export default App;
