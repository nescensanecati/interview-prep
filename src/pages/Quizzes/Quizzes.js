import './Quizzes.scss'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Quizzes() {
    const { subject } = useParams();

    function handleOnClick () {
        alert ('next question')
    }

    return (
        <>
            <section className='quizzes'>
                <div className='box-container'>
                    <div className="box">
                        <h3 className="title">{subject}</h3>
                        <h3 className='question'>Question 1: What does HTML stand for?</h3>
                        <div className="flex">
                            <button><i className="fa-solid fa-1"></i><span>Hyperlink Text Markup Language</span></button>
                            <button><i className="fa-solid fa-2"></i><span>Hypertext Transfer Markup Language</span></button>
                            <button><i className="fa-solid fa-3"></i><span>Hyper Text Makeup Language</span></button>
                            <button><i className="fa-solid fa-4"></i><span>High-Level Text Markup Language</span></button>
                        </div>
                        <section className='bottom'>
                            <div className="more-btn">
                                <Link to="/preparation" className="inline-option-btn">Exit</Link>
                            </div>
                            <div className="more-btn">
                                <button className="inline-option-btn" onClick={handleOnClick}>next question</button>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quizzes;