import './CohortPanel.scss';


function CohortPanel(props) {
   const {cohorts, clickAction} = props;


    return (
        <>
            <div className="panel-box">             
                <ul className='panel-box__head'>Choose a Cohort by Start Date</ul>
                    <li onClick={() => clickAction(false)} className='panel-box__selection'>All Students</li>
                    {cohorts.map((cohort,index) => {     
                    
                        return (                       
                            <li onClick={ () => clickAction(cohort.split(' ').join(''))} key={index} className='panel-box__selection'>{cohort}</li>                           
                        )
                        
                    })}
            </div>
        </>
    )
}

export default CohortPanel;