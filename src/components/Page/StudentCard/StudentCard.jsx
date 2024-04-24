import { useState } from 'react';
import StudentHeader from './StudentHeader/StudentHeader';
import StudentScorecard from './StudentScorecard/StudentScorecard';
import './StudentCard.scss'

function StudentCard(props) {
    
    const {studentInfo } = props;
    const [showStatus, setShowStatus] = useState(-1);

    return (
        <>
            {studentInfo.map((student, index) => {
                const codewarsCurrent = student.codewars.current;
                const codewarsGoal = student.codewars.goal;
                const certs = student.certifications;
                const scores = student.cohort.scores;
                const verified = certs.resume && certs.linkedin && certs.mockInterview && certs.github && codewarsCurrent.total > 600;

                return (
                        <article key={student.id} className={showStatus!== -1 ? 'page__student student ': 'page__student student hover'}>
                            <StudentHeader
                            src={student.profilePhoto} 
                            name={student} 
                            verified={verified} 
                            username={student.username} 
                            dob={student.dob} 
                            index={index}
                            state={showStatus}
                            setState={setShowStatus}
                             />
                            {showStatus === index && (                                      
                            <StudentScorecard
                            src={student.profilePhoto} 
                            name={student} 
                            verified={verified} 
                            username={student.username} 
                            dob={student.dob} 
                            setState={setShowStatus}
                            codewarsCurrent={codewarsCurrent}
                            codewarsGoal={codewarsGoal}
                            scores={scores}
                            certs={certs}
                                />                                                              
                                ) }
                        </article>
                        
                )
            })}
        </>
    )
}

export default StudentCard;