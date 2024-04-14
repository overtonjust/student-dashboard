import { useState } from 'react'
import Header from './components/Header/Header';
import CohortPanel from './components/CohortPanel/CohortPanel';
import Page from './components/Page/Page';

import data from './data/data.json';
import './App.scss'

function App() {
  const uniqueCohorts = [...new Set(data.map(student => student.cohort.cohortCode))] // remove duplicate seasons and place into an array
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

  const [currCohort, setCurrCohort] = useState(false);

  const changeCohort = (clickedCohort) => {
    setCurrCohort(clickedCohort)
  }
  const filteredList = currCohort ? data.filter(student =>  student.cohort.cohortCode === currCohort) : data;

  return (
    <>
      <div className="container">
        <Header/>
        <div className="container__body">
          <CohortPanel cohorts={cohortList} clickAction={changeCohort} activeState={currCohort} />
          <Page data={filteredList} selectedCohort={currCohort} />
        </div>
      </div>
      
    </>
  )
}

export default App
