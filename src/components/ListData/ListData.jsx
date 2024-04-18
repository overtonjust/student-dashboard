import { useState } from "react";
import './ListData.scss'




function ListData (props) {
    const { desktopActive, cohorts, clickAction, activeState} = props;

    return (
        <>
            <ul className='list'>{desktopActive ? 'Choose a Cohort by Start Date': ''}</ul>
                <li onClick={() => clickAction(false)} className={!activeState ? 'list__selection list__active' : 'list__selection' }>All Students</li>
                {cohorts.map((cohort,index) => {     
                    const cohortForData = cohort.split(' ').join('')
                    return (                       
                        <li onClick={ () => clickAction(cohortForData)} key={index} className={cohortForData == activeState ? 'list__selection list__active' : 'list__selection'}>{cohort}</li>                           
                    )
                
                })}
        </>
        
    )
}

export default ListData;