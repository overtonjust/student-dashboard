import { useState } from 'react';
import StudentHeader from './StudentHeader/StudentHeader';
import StudentScores from './StudentScores/StudentScores';
import StudentForm from './StudentForm/StudentForm';
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
                        <article key={student.id} className='page__student student'>
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
                                    <>
                                        <StudentScores
                                        codewarsCurrent={codewarsCurrent}
                                        codewarsGoal={codewarsGoal}
                                        scores={scores}
                                        certs={certs}
                                         />
                                        <StudentForm
                                        notes={student.notes}
                                        />     
                                    </>                             
                                ) }
                        </article>
                        
                )
            })}
        </>
    )
}

export default StudentCard;