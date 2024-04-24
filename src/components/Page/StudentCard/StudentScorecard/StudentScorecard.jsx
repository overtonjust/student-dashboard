import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import './StudentScorecard.scss';


function StudentScorecard(props) {
    const { codewarsCurrent, codewarsGoal, scores, certs, src , name, verified, username, dob, setState} = props;

    function formatName(obj) {
        const firstName = obj.names.preferredName;
        const middleInitial = obj.names.middleName.charAt(0);
        const lastName = obj.names.surname;
    
        return `${firstName} ${middleInitial}. ${lastName}`
    }
    
    function formateDate(string) {
        const date = new Date(string)
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
    
        return date.toLocaleDateString('en-us', options)
    }

    
    function convertToPercentStr(num1, num2) {
        const verifiedNum1 = Number(num1);
        let verifiedNum2 = false;

        if(num2){
            verifiedNum2 = Number(num2);
        }
        
        const percentage = verifiedNum2 ?  ((verifiedNum1 / verifiedNum2) * 100).toFixed(0) : (verifiedNum1 * 100).toFixed(0); 

        return `${percentage}%`;
    }

    return (
        
        <div className="stats-backdrop">
            <div className='student__stats stats'>
                <div className="stats__close">
                    <button onClick={() =>  setState(-1)} className='stats__exit'>X</button>
                </div>
                <div className="stats-header ">
                    <img className='stats-header__img' src={src} alt={formatName(name)} />
                    <div className="stats-header__info">
                        <div className="stats-header__head">
                            <p className='stats-header__name'>{formatName(name)}</p>
                            <p className='stats-header__verified'>{verified ? 'On track to graduate' : ''}</p>
                        </div>
                        <p className='stats-header__email'>{username}</p>
                        <p className='stats-header__birthday'>Birthday: {formateDate(dob)}</p>
                    </div>
                </div>
                <div className='stats__codewars'>
                    <div className="stats__title-block">
                        <p className='stats__head'>Codewars:</p>
                    </div>
                    <p className='stats__content'><span className='stats__label'>Current Total:</span> <span className='stats__value'>{codewarsCurrent.total}</span></p>
                    <p className='stats__content'><span className='stats__label'>Last Week:</span> <span className='stats__value'>{codewarsCurrent.lastWeek}</span></p>
                    <p className='stats__content'><span className='stats__label'>Goal:</span> <span className='stats__value'>{codewarsGoal.total}</span></p>                                          
                    <p className='stats__content'><span className='stats__label'>Percent Achieved:</span> <span className='stats__value'>{convertToPercentStr(codewarsCurrent.total, codewarsGoal.total)}</span></p>                                          
                </div>
                <div className='stats__scores'>
                    <div className="stats__title-block">
                         <p className='stats__head'>Scores:</p>   
                    </div>
                    <p className='stats__content'><span className='stats__label'>Assignments:</span> <span className='stats__value'>{convertToPercentStr(scores.assignments)}</span></p>
                    <p className='stats__content'><span className='stats__label'>Projects:</span> <span className='stats__value'>{convertToPercentStr(scores.projects)}</span></p>
                    <p className='stats__content'><span className='stats__label'>Assessments:</span> <span className='stats__value'>{convertToPercentStr(scores.assessments)}</span></p>   
                </div>
                <div className='stats__certifications'>
                    <div className="stats__title-block">
                        <p className='stats__head'>Prep Status:</p>
                    </div>
                    <p className='stats__content'><span className='stats__label'>Resume: <FontAwesomeIcon className={certs.resume ? 'stats__icon stats__check' : 'stats__icon stats__x'} icon={certs.resume ? faCheck : faXmark} /></span></p>
                    <p className='stats__content'><span className='stats__label'>LinkedIn: <FontAwesomeIcon className={certs.linkedin ? 'stats__icon stats__check' : 'stats__icon stats__x'} icon={certs.linkedin ? faCheck : faXmark} /></span></p>
                    <p className='stats__content'><span className='stats__label'>Mock Interview: <FontAwesomeIcon className={certs.mockInterview ? 'stats__icon stats__check' : 'stats__icon stats__x'} icon={certs.mockInterview ? faCheck : faXmark} /></span></p>   
                    <p className='stats__content'><span className='stats__label'>GitHub: <FontAwesomeIcon className={certs.github ? 'stats__icon stats__check' : 'stats__icon stats__x'} icon={certs.github ? faCheck : faXmark} /></span></p>   
                </div>
            </div>
        </div>
    )
}

export default StudentScorecard;