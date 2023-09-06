import './Header.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import logoImgLight from '../../assets/images/logo-light.svg'
import logoImgDark from '../../assets/images/logo-dark.svg'
import axios from 'axios';

function Header(isLoggedIn) {
   let logoImg;
   let darkMode = getCookie('dark-mode');
   let bearerToken = sessionStorage.getItem("token");
   const [userInfo, setUserInfo] = useState()

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

   function logOut() {
      sessionStorage.removeItem('token');
      window.location.reload(false);
   }

   useEffect(() => {
      if (isLoggedIn) {
         const url = `https://database-backend-brainstation-70fdd396b787.herokuapp.com/api/users/current`;
         const config = {
            headers: {
               Authorization: 'Bearer ' + bearerToken
            }
         };
         axios
            .get(url, config)
            .then((response) => {
               setUserInfo({
                  userId: response.data.id,
                  firstName: response.data.first_name,
                  lastName: response.data.last_name,
                  email: response.data.email,
               })
            })
            .catch((error) => {
               console.log("error calling axios", error);
            });
      }
   }, [isLoggedIn]);



   if (darkMode === 'enabled') {
      logoImg = logoImgDark;
   }
   else {
      logoImg = logoImgLight;
   }

   function getProfileName() {
      if (userInfo) {
         return (<h3 className="name">{userInfo.firstName + ' ' + userInfo.lastName}</h3>)
      }
      else {
         return (<h3 className="name">Guest User</h3>)
      }
   }

   function getProfileEmail() {
      if (userInfo) {
         return (<p className="role">{userInfo.email}</p>)
      }
      else {
         return (<p className="role">Guest</p>)
      }
   }

   function signedIn() {
      if (userInfo) {
         return (
            <>
               {/* <Link to='/' className="btn">view profile</Link> */}
               <button className="option-btn" onClick={logOut}>Log out</button>
            </>
         )
      }
      else {
         return (
            <>
               <Link to="/login" className="option-btn">login</Link>
            </>)
      }
   }

   return (
      <>
         <header className="header">

            <section className="flex">

               <Link to='/'><img className="logo" src={logoImg} alt="" /></Link>

               {/* <form action="search.html" method="post" className="search-form">
                  <input type="text" name="search_box" required placeholder="search courses..." maxLength="100" />
                  <button type="submit" className="fas fa-search"></button>
               </form> */}

               <div className="icons">
                  <div id="menu-btn" className="fas fa-bars"></div>
                  {/* <div id="search-btn" className="fas fa-search"></div> */}
                  <div id="user-btn" className="fas fa-user"></div>
                  <div id="toggle-btn" className="fas fa-sun"></div>
               </div>

               <div className="profile">
                  <i className="fa-solid fa-circle-user guest-icon"></i>
                  {getProfileName()}
                  {getProfileEmail()}
                  <div className="flex-btn">
                     {signedIn()}
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
               {getProfileName()}
               {getProfileEmail()}
               {signedIn()}
            </div>

            <nav className="navbar">
               <Link to='/'><i className="fas fa-home"></i><span>home</span></Link>
               <Link to='/preparation'><i className="fas fa-graduation-cap"></i><span>preparation</span></Link>
               <Link to='/about'><i className="fas fa-question"></i><span>about</span></Link>
               <Link to='/contact'><i className="fas fa-headset"></i><span>contact us</span></Link>
               <Link to='https://www.alex-diaz.info' target="_blank"><i className="fa fa-user-tie"></i><span>Who am I?</span></Link>
            </nav>

         </div>
      </>
   )
}

export default Header;