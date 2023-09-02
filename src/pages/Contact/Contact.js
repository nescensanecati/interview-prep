import './Contact.scss'
import contactUsImg from '../../assets/images/contact-img.svg'


function Contact() {
    function handleSubmitClick() {

    }

    return (
        <>
            <section class="contact">

                <div class="row">

                    <div class="image">
                        <img src={contactUsImg} alt="" />
                    </div>

                    <form action="" method="post">
                        <h3>get in touch</h3>
                        <input type="text" placeholder="enter your name" name="name" required maxlength="50" class="box" />
                        <input type="email" placeholder="enter your email" name="email" required maxlength="50" class="box" />
                        <input type="number" placeholder="enter your number" name="number" required maxlength="50" class="box" />
                        <textarea name="msg" class="box" placeholder="enter your message" required maxlength="1000" cols="30" rows="10"></textarea>
                        <input type="submit" value="send message" class="inline-btn" name="submit" onClick={handleSubmitClick} />
                    </form>

                </div>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-phone"></i>
                        <h3>phone number</h3>
                        <a href="tel:1234567890">123-456-7890</a>
                    </div>

                    <div class="box">
                        <i class="fas fa-envelope"></i>
                        <h3>email address</h3>
                        <a href="mailto:shaikhanas@gmail.com">shaikhanas@gmail.come</a>
                    </div>

                    <div class="box">
                        <i class="fas fa-map-marker-alt"></i>
                        <h3>office address</h3>
                        <a href="#">Business Adress</a>
                    </div>

                </div>

            </section>
        </>
    );
}

export default Contact;