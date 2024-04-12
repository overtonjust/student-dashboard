import { useState } from 'react'

import Header from './components/Header';
import CohortPanel from './components/CohortPanel';
import Page from './components/Page';

import data from './data/data.json';
import './App.scss'

function App() {
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

  const [currCohort, setCurrCohort] = useState(null);

  const changeCohort = (clickedCohort) => {
    setCurrCohort(clickedCohort)
  }
  const filteredList = currCohort ? data.filter(student =>  student.cohort.cohortCode === currCohort) : data;

  return (
    <>
      <div className="container">
        <Header/>
        <div className="container__body">
          <CohortPanel cohorts={cohortList} clickAction={changeCohort} />
          <Page data={filteredList} />
        </div>
      </div>
      
    </>
  )
}

export default App
