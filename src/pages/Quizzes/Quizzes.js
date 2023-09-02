import './Quizzes.scss'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Quizzes () {
    const { subject } = useParams();

    return (
        <>
            <section className='quizzes'>
                <div className='box-container'>
                    <div className="box">
                        <h3 className="title">{subject}</h3>
                        <h3 className='question'>Question 1: What does HTML stand for?</h3>
                        <div className="flex">
                            <Link to="/quizzes/html"><i className="fa-solid fa-1"></i><span>Hyperlink Text Markup Language</span></Link>
                            <Link to="/quizzes/css"><i className="fa-solid fa-2"></i><span>Hypertext Transfer Markup Language</span></Link>
                            <Link to="/quizzes/scss"><i className="fa-solid fa-3"></i><span>Hyper Text Makeup Language</span></Link>
                            <Link to="/quizzes/javascript"><i className="fa-solid fa-4"></i><span>High-Level Text Markup Language</span></Link>
                        </div>
                    </div>
                    </div> 
            </section>
        </>
    )
}

export default Quizzes;