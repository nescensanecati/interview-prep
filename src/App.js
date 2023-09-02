//CSS Import
import './App.scss';

// React and other imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages import
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Functions from './components/Functions/Functions';
import Preparation from './pages/Preparation/Preparation';
import NotFound from './pages/NotFound/NotFound';
import Quizzes from './pages/Quizzes/Quizzes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/quizzes/:subject" element={<Quizzes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Functions />
      </BrowserRouter>
    </>
  );
}

export default App;
