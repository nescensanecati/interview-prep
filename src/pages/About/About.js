import './About.scss'
import aboutImg from '../../assets/images/about-img.svg'
import Footer from '../Footer/Footer';

function About() {

    return (
        <>
            <section className="about">

                <div className="row">

                    <div className="image">
                        <img src={aboutImg} alt=""/>
                    </div>

                    <div className="content">
                        <h3>why choose us?</h3>
                        <p>Choosing our interview preparation page means you're investing in a comprehensive, up-to-date, and user-friendly platform that will equip you with the skills, knowledge, and confidence needed to excel in your job interviews and ultimately secure the job you desire.</p>
                        <a href="/preparation" className="inline-btn">our courses</a>
                    </div>

                </div>

            </section>

            <section className="reviews">

                <h1 className="heading">student's reviews</h1>

                <div className="box-container">

                    <div className="box">
                        <p>"I can't thank this interview preparation website enough! It's been a game-changer in my job search. The comprehensive resources and mock interview sessions helped me land my dream job!"</p>
                        <div className="student">
                            <i className="fa-solid fa-circle-user guest-icon"></i>
                                <div>
                                    <h3>John Michael Smith</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="box">
                        <p>"The interview preparation website is a one-stop-shop for all things interview-related. The expertly crafted interview questions and answers gave me the confidence I needed to ace my interviews."</p>
                        <div className="student">
                            <i className="fa-solid fa-circle-user guest-icon"></i>
                                <div>
                                    <h3>Sarah Elizabeth Johnson</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="box">
                        <p>"I stumbled upon this website while preparing for a technical interview. The coding challenges and explanations were spot-on. I got the job, and I owe it to this fantastic resource!"</p>
                        <div className="student">
                            <i className="fa-solid fa-circle-user guest-icon"></i>
                                <div>
                                    <h3>David Christopher Williams</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="box">
                        <p>"I'm not the best at interviews, but this website turned me into a confident interviewee. The personalized feedback on my mock interviews was invaluable, and I felt well-prepared for the real thing."</p>
                        <div className="student">
                            <i className="fa-solid fa-circle-user guest-icon"></i>
                                <div>
                                    <h3>Emily Anne Davis</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="box">
                        <p>"I've used several interview prep websites in the past, but this one is by far the best. The user-friendly interface, extensive content, and real-world tips make it a standout choice."</p>
                        <div className="student">
                            <i className="fa-solid fa-circle-user guest-icon"></i>
                                <div>
                                    <h3>Michael James Brown</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="box">
                        <p>"This website doesn't just provide interview questions and answers; it teaches you how to think like an interviewer. I learned valuable strategies that helped me stand out from the competition."</p>
                        <div className="student">
                            <i className="fa-solid fa-circle-user guest-icon"></i>
                                <div>
                                    <h3>Jennifer Lynn Miller</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </>
    );
}

export default About;