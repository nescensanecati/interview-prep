import { useEffect } from "react";

function Functions() {
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

    function setCookie(cname, cvalue, exdays) {
        document.cookie = cname + "=" + cvalue;
    }

    useEffect(() => {
        let toggleBtn = document.getElementById('toggle-btn');
        let body = document.body;
        let darkMode = getCookie('dark-mode');

        const enableDarkMode = () => {
            toggleBtn.classList.replace('fa-sun', 'fa-moon');
            body.classList.add('dark');
            setCookie("dark-mode", "enabled");
        }

        const disableDarkMode = () => {
            toggleBtn.classList.replace('fa-moon', 'fa-sun');
            body.classList.remove('dark');
            setCookie("dark-mode", "disabled");
        }

        if (darkMode === 'enabled') {
            enableDarkMode();
        }

        toggleBtn.onclick = (e) => {
            darkMode = getCookie('dark-mode');
            if (darkMode === 'disabled') {
                enableDarkMode();
                window.location.reload(false);
            } else {
                disableDarkMode();
                window.location.reload(false);
            }
        }

        let profile = document.querySelector('.header .flex .profile');

        document.querySelector('#user-btn').onclick = () => {
            profile.classList.toggle('active');
            // search.classList.remove('active');
        }

        // let search = document.querySelector('.header .flex .search-form');

        // document.querySelector('#search-btn').onclick = () => {
        //     search.classList.toggle('active');
        //     profile.classList.remove('active');
        // }

        let sideBar = document.querySelector('.side-bar');

        document.querySelector('#menu-btn').onclick = () => {
            if (window.innerWidth < 1280){
            sideBar.classList.toggle('active');
            body.classList.toggle('active');}
        }

        document.querySelector('#close-btn').onclick = () => {
            if (window.innerWidth < 1280){
            sideBar.classList.remove('active');
            body.classList.remove('active');}
        }

        window.onscroll = () => {
            profile.classList.remove('active');
            // search.classList.remove('active');

            if (window.innerWidth < 1280) {
                sideBar.classList.remove('active');
                body.classList.remove('active');
            }
        }

        document.body.onclick = (event) => {
            if (
                (event.target !== document.querySelector('#user-btn')) &&
                (profile.classList.contains('active')) 
            ) {
                profile.classList.remove('active');
            }
            if (
                (event.target !== document.querySelector('#menu-btn')) &&
                (sideBar.classList.contains('active')) 
            ) {
                sideBar.classList.remove('active');
            }
            if (
                (event.target !== document.querySelector('#menu-btn')) &&
                (sideBar.classList.contains('active')) &&
                (window.innerWidth < 1280)
            ) {
                sideBar.classList.remove('active');
            }
            if (
                (event.target !== document.querySelector('#search-btn')) 
                // && (search.classList.contains('active'))
            ) {
                // search.classList.remove('active');
            }
        }
     }, []);
}

export default Functions;