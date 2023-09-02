import './Header.scss'
import { Link } from 'react-router-dom';
import guestUserImg from '../../assets/images/user-dark.svg';


function Header() {
    return (
        <>
        <header className="header">

            <section className="flex">

               <a href="/" className="logo">Interview-Prep</a>

               <form action="search.html" method="post" className="search-form">
                  <input type="text" name="search_box" required placeholder="search courses..." maxLength="100" />
                  <button type="submit" className="fas fa-search"></button>
               </form>

               <div className="icons">
                  <div id="menu-btn" className="fas fa-bars"></div>
                  <div id="search-btn" className="fas fa-search"></div>
                  <div id="user-btn" className="fas fa-user"></div>
                  <div id="toggle-btn" className="fas fa-sun"></div>
               </div>

               <div className="profile">
                  <img src={guestUserImg} className="image" alt="" />
                  <h3 className="name">Guest User</h3>
                  <p className="role">Guest</p>
                  <a href="profile.html" className="btn">view profile</a>
                  <div className="flex-btn">
                  <Link to="/login" className="option-btn">login</Link>
                  <Link to="/signup"  className="option-btn">Register</Link>
                  </div>
               </div>

            </section>

         </header>

         <div className="side-bar">

            <div id="close-btn">
               <i className="fas fa-times"></i>
            </div>

            <div className="profile">
               <img src={guestUserImg} className="image" alt="" />
               <h3 className="name">Guest User</h3>
               <p className="role">Guest</p>
               <a href="profile.html" className="btn">view profile</a>
            </div>

            <nav className="navbar">
               <a href="home.html"><i className="fas fa-home"></i><span>home</span></a>
               <a href="about.html"><i className="fas fa-question"></i><span>about</span></a>
               <a href="courses.html"><i className="fas fa-graduation-cap"></i><span>courses</span></a>
               <a href="teachers.html"><i className="fas fa-chalkboard-user"></i><span>teachers</span></a>
               <a href="contact.html"><i className="fas fa-headset"></i><span>contact us</span></a>
            </nav>

         </div>
         </>
    )
}

export default Header;