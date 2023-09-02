import './About.scss'
import aboutImg from '../../assets/images/about-img.svg'
import guestUserIcon from '../../assets/images/user-dark.svg'

function About() {

    return (
        <>
            <section class="about">

                <div class="row">

                    <div class="image">
                        <img src={aboutImg} alt=""/>
                    </div>

                    <div class="content">
                        <h3>why choose us?</h3>
                        <p>Choosing our interview preparation page means you're investing in a comprehensive, up-to-date, and user-friendly platform that will equip you with the skills, knowledge, and confidence needed to excel in your job interviews and ultimately secure the job you desire.</p>
                        <a href="courses.html" class="inline-btn">our courses</a>
                    </div>

                </div>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-graduation-cap"></i>
                        <div>
                            <h3>+10k</h3>
                            <p>online courses</p>
                        </div>
                    </div>

                    <div class="box">
                        <i class="fas fa-user-graduate"></i>
                        <div>
                            <h3>+40k</h3>
                            <p>brilliant students</p>
                        </div>
                    </div>

                    <div class="box">
                        <i class="fas fa-chalkboard-user"></i>
                        <div>
                            <h3>+2k</h3>
                            <p>expert tutors</p>
                        </div>
                    </div>

                    <div class="box">
                        <i class="fas fa-briefcase"></i>
                        <div>
                            <h3>100%</h3>
                            <p>job placement</p>
                        </div>
                    </div>

                </div>

            </section>

            <section class="reviews">

                <h1 class="heading">student's reviews</h1>

                <div class="box-container">

                    <div class="box">
                        <p>"I can't thank this interview preparation website enough! It's been a game-changer in my job search. The comprehensive resources and mock interview sessions helped me land my dream job!"</p>
                        <div class="student">
                            <img src={guestUserIcon} alt=""/>
                                <div>
                                    <h3>John Michael Smith</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>"The interview preparation website is a one-stop-shop for all things interview-related. The expertly crafted interview questions and answers gave me the confidence I needed to ace my interviews."</p>
                        <div class="student">
                            <img src={guestUserIcon} alt=""/>
                                <div>
                                    <h3>Sarah Elizabeth Johnson</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>"I stumbled upon this website while preparing for a technical interview. The coding challenges and explanations were spot-on. I got the job, and I owe it to this fantastic resource!"</p>
                        <div class="student">
                            <img src={guestUserIcon} alt=""/>
                                <div>
                                    <h3>David Christopher Williams</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>"I'm not the best at interviews, but this website turned me into a confident interviewee. The personalized feedback on my mock interviews was invaluable, and I felt well-prepared for the real thing."</p>
                        <div class="student">
                            <img src={guestUserIcon} alt=""/>
                                <div>
                                    <h3>Emily Anne Davis</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>"I've used several interview prep websites in the past, but this one is by far the best. The user-friendly interface, extensive content, and real-world tips make it a standout choice."</p>
                        <div class="student">
                            <img src={guestUserIcon} alt=""/>
                                <div>
                                    <h3>Michael James Brown</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>"This website doesn't just provide interview questions and answers; it teaches you how to think like an interviewer. I learned valuable strategies that helped me stand out from the competition."</p>
                        <div class="student">
                            <img src={guestUserIcon} alt=""/>
                                <div>
                                    <h3>Jennifer Lynn Miller</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}

export default About;