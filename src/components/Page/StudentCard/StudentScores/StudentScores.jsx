import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import './StudentScores.scss';


function StudentScores(props) {
    const { codewarsCurrent, codewarsGoal, scores, certs} = props;
    
    function convertToPercentStr(num1, num2) {
        const verifiedNum1 = Number(num1);
        let verifiedNum2 = false;

        if(num2){
            verifiedNum2 = Number(num2);
        }
        
        const percentage = verifiedNum2 ?  ((verifiedNum1 / verifiedNum2) * 100).toFixed(1) : (verifiedNum1 * 100).toFixed(1); 

        return `${percentage}%`;
    }

    return (
        <div className='student__stats stats'>
            <div className='stats__codewars'>
                <p className='stats__head'>Codewars:</p>
                <p className='stats__content'><span className='stats__label'>Current Total:</span> <span className='stats__value'>{codewarsCurrent.total}</span></p>
                <p className='stats__content'><span className='stats__label'>Last Week:</span> <span className='stats__value'>{codewarsCurrent.lastWeek}</span></p>
                <p className='stats__content'><span className='stats__label'>Goal:</span> <span className='stats__value'>{codewarsGoal.total}</span></p>                                          
                <p className='stats__content'><span className='stats__label'>Percent of Goal Achieved:</span> <span className='stats__value'>{convertToPercentStr(codewarsCurrent.total, codewarsGoal.total)}</span></p>                                          
            </div>
            <div className='stats__scores'>
            <p className='stats__head'>Scores</p>
                <p className='stats__content'><span className='stats__label'>Assignments:</span> <span className='stats__value'>{convertToPercentStr(scores.assignments)}</span></p>
                <p className='stats__content'><span className='stats__label'>Projects:</span> <span className='stats__value'>{convertToPercentStr(scores.projects)}</span></p>
                <p className='stats__content'><span className='stats__label'>Assessments:</span> <span className='stats__value'>{convertToPercentStr(scores.assessments)}</span></p>   
            </div>
            <div className='stats__cetifications'>
            <p className='stats__head'>Certifications</p>
                <p className='stats__content'><span className='stats__label'>Resume: <FontAwesomeIcon className={certs.resume ? 'stats__icon stats__check' : 'stats__icon stats__x'} icon={certs.resume ? faCheck : faXmark} /></span></p>
                <p className='stats__content'><span className='stats__label'>LinkedIn: <FontAwesomeIcon className={certs.linkedin ? 'stats__icon stats__check' : 'stats__icon stats__x'} icon={certs.linkedin ? faCheck : faXmark} /></span></p>
                <p className='stats__content'><span className='stats__label'>Mock Interview: <FontAwesomeIcon className={certs.mockInterview ? 'stats__icon stats__check' : 'stats__icon stats__x'} icon={certs.mockInterview ? faCheck : faXmark} /></span></p>   
                <p className='stats__content'><span className='stats__label'>GitHub: <FontAwesomeIcon className={certs.github ? 'stats__icon stats__check' : 'stats__icon stats__x'} icon={certs.github ? faCheck : faXmark} /></span></p>   
            </div>
        </div>
    )
}

export default StudentScores;