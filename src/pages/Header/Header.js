import './Header.scss'
import { Link } from 'react-router-dom';
import logoImgLight from '../../assets/images/logo-light.svg'
import logoImgDark from '../../assets/images/logo-dark.svg'

function Header() {
   let logoImg;
   let darkMode = getCookie('dark-mode');


   function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
         let c = ca[i];
         while (c.charAt(0) === ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
         }
      }
      return "disabled";
   }


   if (darkMode === 'enabled') {
      logoImg = logoImgDark;
   }
   else {
      logoImg = logoImgLight;
   }
   return (
      <>
         <header className="header">

            <section className="flex">

               <Link to='/'><img className="logo" src={logoImg} alt="" /></Link>

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
                  <i className="fa-solid fa-circle-user guest-icon"></i>
                  <h3 className="name">Guest User</h3>
                  <p className="role">Guest</p>
                  <Link to='/' className="btn">view profile</Link>
                  <div className="flex-btn">
                     <Link to="/login" className="option-btn">login</Link>
                     <Link to="/signup" className="option-btn">Register</Link>
                  </div>
               </div>

            </section>

         </header>

         <div className="side-bar">

            <div id="close-btn">
               <i className="fas fa-times"></i>
            </div>

            <div className="profile">
               <i className="fa-solid fa-circle-user guest-icon"></i>
               <h3 className="name">Guest User</h3>
               <p className="role">Guest</p>
               <Link to='/login' className="btn">sign in</Link>
            </div>

            <nav className="navbar">
               <Link to='/'><i className="fas fa-home"></i><span>home</span></Link>
               <Link to='/preparation'><i className="fas fa-graduation-cap"></i><span>preparation</span></Link>
               <Link to='/about'><i className="fas fa-question"></i><span>about</span></Link>
               <Link to='/contact'><i className="fas fa-headset"></i><span>contact us</span></Link>
               <Link to='https://www.alex-diaz.info'><i className="fa fa-user-tie"></i><span>Who am I?</span></Link>
            </nav>

         </div>
      </>
   )
}

export default Header;