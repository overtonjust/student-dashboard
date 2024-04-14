import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import './StudentCard.scss'

function StudentCard(props) {
    const {studentInfo } = props;


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
        
        const percentage = verifiedNum2 ?  ((verifiedNum1 / verifiedNum2) * 100).toFixed(1) : (verifiedNum1 * 100).toFixed(1); 

        return `${percentage}%`;
    }

    const [showStatus, setShowStatus] = useState(false);

    return (
        <>
            {studentInfo.map(student => {
                const codewarsCurrent = student.codewars.current;
                const codewarsGoal = student.codewars.goal;
                const certs = student.certifications;
                const scores = student.cohort.scores;
                const verified = certs.resume && certs.linkedin && certs.mockInterview && certs.github;

                return (
                        <article key={student.id} className='page__student student'>
                            <img className='student__img' src={student.profilePhoto} alt={formatName(student)} />
                            <div className="student__info">
                                <div className="student__head">
                                    <p className='student__name'>{formatName(student)}</p>
                                    <p className='student__verified'>{verified ? 'On track to graduate' : ''}</p>
                                </div>
                                <p className='student__email'>{student.username}</p>
                                <p className='student__birthday'><span className='student__highlight'>Birthday: </span>{formateDate(student.dob)}</p>
                                <button onClick={() => setShowStatus(!showStatus)} className='student__more'>{showStatus ? 'Show Less... ' : 'Show More...'}</button>
                            </div>
                                {showStatus && (                                 
                                    <div className='student__stats stats'>
                                        <div className='stats__codewars'>
                                            <p className='stats__head'>Codewars:</p>
                                            <p className='stats__content'><span className='student__label'>Current Total:</span> <span className='student__value'>{codewarsCurrent.total}</span></p>
                                            <p className='stats__content'><span className='student__label'>Last Week:</span> <span className='student__value'>{codewarsCurrent.lastWeek}</span></p>
                                            <p className='stats__content'><span className='student__label'>Goal:</span> <span className='student__value'>{codewarsGoal.total}</span></p>                                          
                                            <p className='stats__content'><span className='student__label'>Percent of Goal Achieved:</span> <span className='student__value'>{convertToPercentStr(codewarsCurrent.total, codewarsGoal.total)}</span></p>                                          
                                        </div>
                                        <div className='stats__scores'>
                                        <p className='stats__head'>Scores</p>
                                            <p className='stats__content'><span className='student__label'>Assignments:</span> <span className='student__value'>{convertToPercentStr(scores.assignments)}</span></p>
                                            <p className='stats__content'><span className='student__label'>Projects:</span> <span className='student__value'>{convertToPercentStr(scores.projects)}</span></p>
                                            <p className='stats__content'><span className='student__label'>Assessments:</span> <span className='student__value'>{convertToPercentStr(scores.assessments)}</span></p>   
                                        </div>
                                        <div className='stats__cetifications'>
                                        <p className='stats__head'>Certifications</p>
                                            <p className='stats__content'><span className='student__label'>Resume: <FontAwesomeIcon className={certs.resume ? 'student__icon student__check' : 'student__icon student__x'} icon={certs.resume ? faCheck : faXmark} /></span></p>
                                            <p className='stats__content'><span className='student__label'>LinkedIn: <FontAwesomeIcon className={certs.linkedin ? 'student__icon student__check' : 'student__icon student__x'} icon={certs.linkedin ? faCheck : faXmark} /></span></p>
                                            <p className='stats__content'><span className='student__label'>Mock Interview: <FontAwesomeIcon className={certs.mockInterview ? 'student__icon student__check' : 'student__icon student__x'} icon={certs.mockInterview ? faCheck : faXmark} /></span></p>   
                                            <p className='stats__content'><span className='student__label'>GitHub: <FontAwesomeIcon className={certs.github ? 'student__icon student__check' : 'student__icon student__x'} icon={certs.github ? faCheck : faXmark} /></span></p>   
                                        </div>
                                    </div>            
                                ) }
                        </article>
                )
            })}
        </>
    )
}

export default StudentCard;