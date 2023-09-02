import './Preparation.scss'
import { Link } from 'react-router-dom'
import codeWarsImg from '../../assets/images/codewars.png'
import hackerRankImg from '../../assets/images/hacker-rank.png'
import leetCode from '../../assets/images/leet-code.png'
import interviewWarmup from '../../assets/images/interview-warmup.png'
import interviewBit from '../../assets/images/interview-bit.png'
import neetCode from '../../assets/images/neet-code.png'
import Footer from '../Footer/Footer'



function Preparation() {
    return (
        <>
            <section className="home-grid">

                <h1 className="heading">Preparation Roadmap</h1>

                <div className="box-container">

                    <div className="box">
                        <h3 className="title">Where to begin...</h3>
                        <div className="flex">
                            <a href="#"><i className="fa fa-hourglass-start"></i><span>Start here</span></a>
                            <a href="#"><i className="fa fa-file"></i><span>Your resume</span></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i><span>LinkedIn</span></a>
                            <a href="#"><i className="fa-brands fa-github"></i><span>GitHub</span></a>
                            <a href="#"><i className="fa-solid fa-phone"></i><span>Phone screening</span></a>
                            <a href="#"><i className="fa-solid fa-question"></i><span>Technical Questions</span></a>
                        </div>
                    </div>

                    <div className="box">
                        <h3 className="title">Other recommendations...</h3>
                        <div className="flex">
                            <a href="#"><i className="fas fa-smile"></i><span>Stay connected</span></a>
                            <a href="#"><i className="fa fa-question-circle"></i><span>Behavioral questions</span></a>
                            <a href="#"><i className="fa fa-user-plus"></i><span>Referrals</span></a>
                            <a href="#"><i className="fas fa-smile"></i><span>Learn about the company</span></a>
                            <a href="#"><i className="fa-solid fa-desktop"></i><span>Get your computer ready</span></a>
                            <a href="#"><i className="fa-solid fa-camera"></i><span>Test your audio and video</span></a>
                        </div>
                    </div>

                    <div className="box">
                        <h3 className="title">Popular Quizzes</h3>
                        <div className="flex">
                            <Link to="/quizzes/html"><i className="fab fa-html5"></i><span>HTML</span></Link>
                            <Link to="/quizzes/css"><i className="fab fa-css3"></i><span>CSS</span></Link>
                            <Link to="/quizzes/scss"><i className="fa-brands fa-sass"></i><span>SCSS</span></Link>
                            <Link to="/quizzes/javascript"><i className="fab fa-js"></i><span>Javascript</span></Link>
                            <Link to="/quizzes/react"><i className="fab fa-react"></i><span>React</span></Link>
                            <Link to="/quizzes/mysql"><i className="fa-solid fa-database"></i><span>MySQL</span></Link>
                        </div>
                    </div>

                </div>

            </section>



            <section className="courses">

                <h1 className="heading">recommended resources</h1>

                <div className="box-container">
                    <div className="box">
                        <div className="tutor">
                            <h3>NeetCode</h3>
                        </div>
                        <div className="thumb">
                            <img src={neetCode} alt="" />
                            <span>Coding Exercises</span>
                        </div>
                        <p className="title">Neetcode is a coding interview prep platform with tons of courses to help both beginners and experienced developers learn the coding skills they need to pass technical coding interviews. The platform focuses on coding problems that have the highest chances of coming up in real-life coding job interviews.</p>
                        <Link to="https://neetcode.io/" className="inline-btn">Take me there</Link>
                    </div>

                    <div className="box">
                        <div className="tutor">
                            <h3>LeetCode</h3>
                        </div>
                        <div className="thumb">
                            <img src={leetCode} alt="" />
                            <span>Coding Exercises</span>
                        </div>
                        <p className="title">LeetCode has gained popularity due to its extensive problem library, user-friendly interface, and its role in helping individuals improve their coding and problem-solving skills. It is a valuable resource for both beginners looking to learn programming and experienced professionals aiming to enhance their technical abilities and job prospects.</p>
                        <Link to="https://leetcode.com/" className="inline-btn">Take me there</Link>
                    </div>

                    <div className="box">
                        <div className="tutor">
                            <h3>HackerRank</h3>
                        </div>
                        <div className="thumb">
                            <img src={hackerRankImg} alt="" />
                            <span>Coding Exercises</span>
                        </div>
                        <p className="title">HackerRank is widely used by programmers, software engineers, data scientists, and other professionals to enhance their technical skills and demonstrate their expertise to potential employers. It is a versatile platform that offers a variety of resources for individuals at different skill levels, from beginners to experienced coders.</p>
                        <Link to='https://hackerrank.com/' className="inline-btn">Take me there</Link>
                    </div>

                    <div className="box">
                        <div className="tutor">
                            <h3>CodeWars</h3>
                        </div>
                        <div className="thumb">
                            <img src={codeWarsImg} alt="" />
                            <span>Coding Exercises</span>
                        </div>
                        <p className="title">CodeWars is known for its engaging and competitive environment, making it an enjoyable platform for programmers of all skill levels to practice and enhance their coding abilities. It's particularly popular among developers who enjoy solving coding puzzles and challenges in a structured and gamified manner.</p>
                        <Link to="https://www.codewars.com/" className="inline-btn">Take me there</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <h3>Interview Warmup</h3>
                        </div>
                        <div className="thumb">
                            <img src={interviewWarmup} alt="" />
                            <span>Coding Exercises</span>
                        </div>
                        <p className="title">With Interview Warmup, your answers are transcribed in real time so you can review what you said. You'll also see insights: patterns detected by machine learning that can help you discover things about your answers, like the job-related terms you use and the words you say most often.</p>
                        <Link to="https://grow.google/certificates/interview-warmup/" className="inline-btn">Take me there</Link>
                    </div>
                    <div className="box">
                        <div className="tutor">
                            <h3>interviewbit</h3>
                        </div>
                        <div className="thumb">
                            <img src={interviewBit} alt="" />
                            <span>Coding Exercises</span>
                        </div>
                        <p className="title">InterviewBit is popular among software engineering and tech job aspirants as it provides structured resources and practice material specifically tailored for technical interviews. It aims to help individuals build confidence, improve their problem-solving skills, and increase their success in technical interviews.</p>
                        <Link to="https://www.interviewbit.com/" className="inline-btn">Take me there</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Preparation;