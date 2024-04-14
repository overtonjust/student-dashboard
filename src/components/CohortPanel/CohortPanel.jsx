import { useState } from 'react';
import './CohortPanel.scss';



function CohortPanel(props) {
    const {cohorts, clickAction, activeState} = props;
  
 
    return (
        <>
            <div className="panel-box">             
                <ul className='panel-box__head'>Choose a Cohort by Start Date</ul>
                    <li onClick={() => clickAction(false)} className={!activeState ? 'panel-box__selection panel-box__active' : ' panel-box__selection' }>All Students</li>
                    {cohorts.map((cohort,index) => {     
                        const cohortForData = cohort.split(' ').join('')
                        return (                       
                            <li onClick={ () => clickAction(cohortForData)} key={index} className={cohortForData == activeState ? 'panel-box__selection panel-box__active' : 'panel-box__selection'}>{cohort}</li>                           
                        )
                        
                    })}
            </div>
        </>
    )
}

export default CohortPanel;