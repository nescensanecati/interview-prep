import './Quizzes.scss'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Quizzes() {
    const { subject } = useParams();
    const [questionId, setQuestionId] = useState();
    const [questionInfo, setquestionInfo] = useState([]);
    const [questionCounter, setQuestionCounter] = useState(1);
    const [correctResponses, setCorrectResponses] = useState(0);
    let responded = false;

    useEffect(() => {
        switch (subject) {
            case 'html':
                setQuestionId(1);
                break;
            case 'css':
                setQuestionId(21);
                break;
            case 'scss':
                setQuestionId(41);
                break;
            case 'javascript':
                setQuestionId(61);
                break;
            case 'react':
                setQuestionId(81);
                break;
            case 'mysql':
                setQuestionId(101);
                break;
            default:
                console.log('error');
                setQuestionId(1);
                break;
        }
    }, []);


    useEffect(() => {
        if (questionId !== undefined){
        axios
            .request({url: `https://database-backend-brainstation-70fdd396b787.herokuapp.com/question/` + questionId})
            .then((response) => {
                setquestionInfo(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [questionId]);


    function handleOnClick() {
        setQuestionId(questionId + 1)
        setQuestionCounter (questionCounter + 1)
        const correctReponse = document.getElementById('correct');
        if (correctReponse != undefined) { correctReponse.setAttribute("id", "other"); };
        const incorrectReponse = document.getElementById('wrong');
        if (incorrectReponse != undefined) { incorrectReponse.setAttribute("id", "other"); };
        const descriptionLocation = document.getElementsByClassName('description');
        descriptionLocation[0].innerHTML = "";
    }

    function handleResponseClick(idFromResponse, index) {
        let responseIsCorrect = false;
        if (responded === false) {
            for (let i = 0; i < questionInfo.length; i++) {
                if (questionInfo[i].response_id === idFromResponse) {
                    if (questionInfo[i].is_correct) {
                        setCorrectResponses(correctResponses + 1)
                        const correctReponse = document.getElementsByClassName('button-' + (index + 1))
                        correctReponse[0].setAttribute("id", "correct");
                        responseIsCorrect = true;
                    }
                }
            }
            const descriptionLocation = document.getElementsByClassName('description')
            descriptionLocation[0].innerHTML = questionInfo[0].description;
            if (responseIsCorrect === false) {
                const incorrectReponse = document.getElementsByClassName('button-' + (index + 1))
                incorrectReponse[0].setAttribute("id", "wrong");
            }
            responded = true;
        }
    }

    function RenderH3({ item, index }) {
        if (index === 0) { return (<h3 className='question'>Question: {item.question}</h3>); }
    }

    if (questionInfo.length !== 0 && questionId.length !== 0) {
        return (
            <>
                <section className='quizzes'>
                    <div className='box-container'>
                        <div className="box">
                            <div className="question-count">
                                <h3 className='count-questions'>Question {questionCounter}/20</h3>
                                <h3 className='count-corrects'>Correct responses: {correctResponses}</h3>
                            </div>
                            <h3 className="title">{subject}</h3>
                            {questionInfo.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <RenderH3 item={item} index={index} />
                                        <div className="flex">
                                            <button className={`button-${index + 1}`} onClick={() => { handleResponseClick(item.response_id, index) }}><i className={`fa-${index + 1} fa-solid`}></i><span>{item.response}</span></button>
                                        </div>
                                    </div>
                                )
                            })}
                            <h3 className='description'></h3>
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
    else {
        return (
            <h3 className='loading'>Loading...</h3>
        )
    }
}

export default Quizzes;