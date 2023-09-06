import './GeneralContent.scss'
import { Link, useParams } from 'react-router-dom'
import subjectsJSON from '../../data/subjects.json'

function GeneralContent() {
    const { subject } = useParams();
    let contentJSON;
    for (let i = 0; i < subjectsJSON.length; i++) {
        if (subjectsJSON[i].page_subject === subject) {
            contentJSON = subjectsJSON[i]
        }
    }

    if (contentJSON) {
        let pageTitle = contentJSON.page_title;
        let pageResources = contentJSON.resources;
        let textIntro = contentJSON.text_intro;
        let textOutro = contentJSON.text_outro;
        let elementsArray = contentJSON.list_elements

        return (
            <>
                <section className="general-content">
                    <div className="general-content__box-container">
                        <h1 className="general-content__heading">{pageTitle}</h1>

                        <div className='general-content__resources'>
                            <h2 className='general-content__h2'>Some good resources:</h2>
                            <ul className='general-content__ul'>
                                {pageResources.map((item, index) => {
                                    return (
                                        <li key={index} className='general-content__li'><a href={Object.values(item)} rel="noopener noreferrer" target="_blank">{Object.keys(item)}</a></li>

                                    )
                                })}
                            </ul>
                        </div>
                        <p className='general-content__p'>{textIntro}</p>
                        {elementsArray.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p className='general-content__title'>{Object.keys(item)}</p>
                                    <ul className='general-content__ul'>
                                        <li className='general-content__li'>{Object.values(item)}</li>
                                    </ul>
                                </div>
                            )
                        })}
                        <p className='general-content__p'>{textOutro}</p>
                        <div className="general-content__bottom">
                            <Link to="/preparation" className="general-content__button">Back</Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default GeneralContent;