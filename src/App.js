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
import Functions from './components/Functions/Functions';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
        <Functions />
      </BrowserRouter>
    </>
  );
}

export default App;
