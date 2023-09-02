import './Preparation.scss'
import { Link } from 'react-router-dom'
import codeWarsImg from '../../assets/images/codewars.png'
import hackerRankImg from '../../assets/images/hacker-rank.png'
import leetCode from '../../assets/images/leet-code.png'
import interviewWarmup from '../../assets/images/interview-warmup.png'
import interviewBit from '../../assets/images/interview-bit.png'



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
                        </div>
                    </div>

                    <div className="box">
                        <h3 className="title">Popular Quizzes</h3>
                        <div className="flex">
                            <a href="#"><i className="fab fa-html5"></i><span>HTML</span></a>
                            <a href="#"><i className="fab fa-css3"></i><span>CSS</span></a>
                            <a href="#"><i className="fa-brands fa-sass"></i><span>SCSS</span></a>
                            <a href="#"><i className="fab fa-js"></i><span>Javascript</span></a>
                            <a href="#"><i className="fab fa-react"></i><span>React</span></a>
                            <a href="#"><i className="fa-solid fa-database"></i><span>MySQL</span></a>
                        </div>
                    </div>

                </div>

            </section>



            <section className="courses">

                <h1 className="heading">recommended resources</h1>

                <div className="box-container">

                    <div className="box">
                        <div className="tutor">
                            <h3>LeetCode</h3>
                        </div>
                        <div className="thumb">
                            <img src={leetCode} alt="" />
                            <span>Coding Exercises</span>
                        </div>
                        <h3 className="title">complete HTML tutorial</h3>
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
                        <h3 className="title">complete HTML tutorial</h3>
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
                        <h3 className="title">complete HTML tutorial</h3>
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
                        <h3 className="title">complete HTML tutorial</h3>
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
                        <h3 className="title">complete HTML tutorial</h3>
                        <Link to="https://www.interviewbit.com/" className="inline-btn">Take me there</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Preparation;