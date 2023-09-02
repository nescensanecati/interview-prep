import './Home.scss'
import heroImg from '../../assets/images/hero.svg'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <>
        <main className='home'>
           <section className="about">

                <div className="row">

                    <div className="image">
                        <img src={heroImg} alt=""/>
                    </div>

                    <div className="content">
                        <h3>Interview Preparation Website</h3>
                        <p>At Interview-Prep, we are dedicated to helping you land your dream job through expert interview preparation. We understand that interviews can be nerve-wracking, but with our comprehensive suite of tools and resources, you'll be equipped with everything you need to succeed.</p>
                        <p>Thousands of job seekers have already trusted InterviewSuccess.com to help them land lucrative positions at top companies. Don't miss out on the opportunity to advance your career.</p>
                    </div>
                </div>
                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <div>
                            <h3>+10k</h3>
                            <p>online courses</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-user-graduate"></i>
                        <div>
                            <h3>+40k</h3>
                            <p>brilliant students</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-chalkboard-user"></i>
                        <div>
                            <h3>+2k</h3>
                            <p>expert tutors</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-briefcase"></i>
                        <div>
                            <h3>100%</h3>
                            <p>job placement</p>
                        </div>
                    </div>

                </div>
            </section>     
        </main>
        <Footer />
        </>
    )
}

export default Home;