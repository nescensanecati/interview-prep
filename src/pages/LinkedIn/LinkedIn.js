import './LinkedIn.scss'
import { Link } from 'react-router-dom'

function LinkedIn() {
    return (
        <>
            <section className="linkedin">
                <div className="linkedin__box-container">
                    <h1 className="linkedin__heading">Getting your LinkedIn ready...</h1>
                    {/* <div className='linkedin__resources'>
                        <h2 className='linkedin__h2'>Some good resources:</h2>
                        <ul className='linkedin__ul'>
                            <li className='linkedin__li'>Youtube Video: </li>
                            <li className='linkedin__li'>Article: </li>
                        </ul>
                    </div> */}
                    <p className='linkedin__p'>Getting your LinkedIn profile ready for a software engineer job is crucial as it serves as a powerful tool for networking and job hunting in the tech industry. Here are some steps to optimize your LinkedIn profile:</p>
                    <p className='linkedin__p'><span className='linkedin__bold'>1. Profile Photo:</span></p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Use a professional and recent headshot.</li>
                        <li className='linkedin__li'>Dress appropriately for the industry you're targeting.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>2. Headline:</span></p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Use a clear and concise headline that reflects your current job or job-seeking status (e.g., "Software Engineer | Seeking New Opportunities").</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>3. Summary:</span></p>
                        <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Write a compelling summary that highlights your skills, experience, and career aspirations.</li>
                        <li className='linkedin__li'>Use keywords related to your field to make your profile more searchable.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>4. Experience:</span></p>
                        <ul className='linkedin__ul'>
                        <li className='linkedin__li'>List your relevant work experience in reverse chronological order.</li>
                        <li className='linkedin__li'>Include detailed descriptions of your roles, responsibilities, and achievements.</li>
                        <li className='linkedin__li'>Highlight any notable projects or contributions you've made.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>5. Skills and Endorsements:</span></p>
                        <ul className='linkedin__ul'>
                        <li className='linkedin__li'>List your technical skills, both hard and soft skills.</li>
                        <li className='linkedin__li'>Ask colleagues and supervisors to endorse your skills.</li>
                        <li className='linkedin__li'>Make sure your top skills align with the job you're seeking.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>6. Recommendations:</span></p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Request recommendations from colleagues, supervisors, or clients who can speak to your skills and work ethic.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>7. Projects and Portfolio:</span></p>
                        <ul className='linkedin__ul'>
                        <li className='linkedin__li'>If possible, showcase your work through projects, GitHub repositories, or a personal website.</li>
                        <li className='linkedin__li'>Add links and descriptions to highlight your technical expertise.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>8. Education:</span></p>
                        <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Include your educational background, degrees, and certifications.</li>
                        <li className='linkedin__li'>Mention any relevant coursework or honors.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>9. Certifications and Courses:</span></p>
                        <ul className='linkedin__ul'>
                        <li className='linkedin__li'>List any relevant certifications or online courses you've completed.</li>
                        <li className='linkedin__li'>Include the issuing institution and completion date.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>10. Volunteer Experience:</span></p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Highlight any volunteer work related to technology or software development.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>11. Groups and Associations:</span></p>
                        <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Join LinkedIn groups related to software engineering, programming languages, and tech trends.</li>
                        <li className='linkedin__li'>Engage in discussions and share your insights.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>12. Customize Your URL:</span> </p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Create a custom LinkedIn URL to make it easier for people to find you.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>13. Contact Information:</span> </p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Ensure your contact information is up-to-date and easily accessible.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>14. Privacy Settings:</span> </p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Adjust your privacy settings as needed to control who can see your profile updates.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>15. Engage and Network:</span> </p>
                        <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Regularly update your status with industry-related posts or articles.</li>
                        <li className='linkedin__li'>Connect with professionals in your field and send personalized connection requests.</li>
                        <li className='linkedin__li'>Engage with your network by liking, commenting, and sharing relevant content.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>16. Job Preferences:</span> </p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Use the "Open to Job Opportunities" feature to signal your job-seeking status to recruiters.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>17. Stay Active:
                    </span> </p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Keep your profile up-to-date, especially when you achieve new milestones or acquire new skills.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>18. Follow Companies and Influencers:</span> </p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Follow companies you're interested in and influential figures in the tech industry to stay informed about industry trends.</li>
                    </ul>
                    <p className='linkedin__p'><span className='linkedin__bold'>19. Stay Professional:</span> </p>
                    <ul className='linkedin__ul'>
                        <li className='linkedin__li'>Keep your LinkedIn profile focused on your professional persona. Avoid sharing personal or unrelated content.</li>
                    </ul>
                    <p className='linkedin__p'>Remember that your LinkedIn profile is a dynamic document that should evolve with your career. Regularly update it to reflect your growth, accomplishments, and changing goals in the software engineering field. Additionally, be active in networking and engaging with your connections to maximize the benefits of your LinkedIn presence in your job search.</p>
                    <div className="linkedin__bottom">
                        <Link to="/preparation" className="linkedin__button">Back</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LinkedIn