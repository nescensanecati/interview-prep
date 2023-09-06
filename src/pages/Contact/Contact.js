import './Contact.scss'
import { Link, useNavigate } from 'react-router-dom';
import contactUsImg from '../../assets/images/contact-img.svg'


function Contact() {
    const navigate = useNavigate();


    function handleSubmitClick(event) {
        event.preventDefault();
        let randomNum = Math.floor(Math.random() * 1000) + 1
        alert ("Thank you " + event.target.name.value + " for reaching out to us. Our team is diligently working on addressing all inquiries, and while it may take us a little time, rest assured that we will get back to you at the email " + event.target.email.value + ". To assist you better, here is your unique ticket number: " + randomNum)
        navigate('/');
    }

    return (
        <>
            <section className="contact">

                <div className="row">

                    <div className="image">
                        <img src={contactUsImg} alt="" />
                    </div>

                    <form onSubmit={handleSubmitClick}>
                        <h3>get in touch</h3>
                        <input type="text" placeholder="enter your name" name="name" required maxLength="50" className="box" />
                        <input type="email" placeholder="enter your email" name="email" required maxLength="50" className="box" />
                        <input type="text" placeholder="enter your phone number (optional)" name="number" maxLength="50" className="box" />
                        <textarea name="msg" className="box" placeholder="enter your message" required maxLength="1000" cols="30" rows="10"></textarea>
                        <input type="submit" value="send message" className="inline-btn" name="submit"/>
                    </form>

                </div>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-phone"></i>
                        <h3>phone number</h3>
                        <Link to="tel:+13058098977">+13058098977</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-envelope"></i>
                        <h3>email address</h3>
                        <Link to="mailto:interview-prep@alex-diaz.info">interview-prep@alex-diaz.info</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>office address</h3>
                        <Link to="https://goo.gl/maps/gj6nbzArpEKvLjoX6">2650 NW 5th Ave, Miami, FL 33127</Link>
                    </div>

                </div>

            </section>
        </>
    );
}

export default Contact;