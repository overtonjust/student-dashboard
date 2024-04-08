import './styles/CohortPanel.scss';
import data from '../data/data.json';

function CohortPanel() {
    const uniqueCohorts = [...new Set(data.map(student => student.cohort.cohortCode))] // remove duplicate seasons
    const cohortList = uniqueCohorts.map(cohort => { // create an arr of objs for each season and year
       const cohortArr = cohort.split(/(\d+)/);
       const season = cohortArr[0];
       const year = Number(cohortArr[1]);

       return {
        season : season,
        year : year,
        }
    })
    .sort((a,b) => { // sort the objects by most recent year and then most recent season if year is the same
        const seasons = ['Winter', 'Fall', 'Summer', 'Spring'];
        if(a.year === b.year) {
            return seasons.indexOf(a.season) - seasons.indexOf(b.season)
        }
        else {
            return b.year - a.year
        }
    })
    .map(obj => `${obj.season} ${obj.year}`) // convert the sorted arr of objs back into a formatted array of strings

    return (
        <>
            <div className="panel-box">
                <p className='panel-box__head'>Choose a Cohort by Start Date</p>
                <p className='panel-box__selection'>All Students</p>
                {cohortList.map(cohort => {     
                    return (
                        <>
                            <p className='panel-box__selection'>{cohort}</p>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default CohortPanel;