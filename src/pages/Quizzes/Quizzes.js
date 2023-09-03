import './Quizzes.scss'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Quizzes() {
    const { subject } = useParams();
    const [questionId, setQuestionId] = useState(1);
    const [questionInfo, setquestionInfo] = useState([]);

    let responded = false;

    useEffect(() => {
        axios
            .get(`http://localhost:8080/question/` + questionId)
            .then((response) => {
                setquestionInfo(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [questionId]);


    function handleOnClick() {
    }

    function handleResponseClick(idFromResponse, index) {
        let responseIsCorrect = false;
        if (responded === false) {
            for (let i = 0; i < questionInfo.length; i++) {
                if (questionInfo[i].response_id === idFromResponse){
                    if (questionInfo[i].is_correct) {
                        const correctReponse = document.getElementsByClassName('button-'+(index+1))
                        correctReponse[0].setAttribute("id", "correct");
                        responseIsCorrect = true;
                    }
                }
            }
            const descriptionLocation = document.getElementsByClassName ('response')
            descriptionLocation[0].innerHTML = questionInfo[0].description
            if (responseIsCorrect === false) {
                const incorrectReponse = document.getElementsByClassName('button-'+(index+1))
                incorrectReponse[0].setAttribute("id", "wrong");
            }
            responded = true;
        }
    }

    if (questionInfo.length !== 0) {
        return (
            <>
                <section className='quizzes'>
                    <div className='box-container'>
                        <div className="box">
                            <h3 className="title">{subject}</h3>
                            <h3 className='question'>Question 1: What does HTML stand for?</h3>
                            <div className="flex">
                                {questionInfo.map((item, index) => {
                                    return (
                                        <button className={`button-${index+1}`} key={index} onClick={() => { handleResponseClick(item.response_id, index) }}><i className={`fa-${index+1} fa-solid`}></i><span>{item.response}</span></button>
                                    )
                                })}
                            </div>
                            <h3 className='response'></h3>
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
}

export default Quizzes;