import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import Page from './components/Page/Page';
import Navbar from './components/Navbar/Navbar';
import CohortPanel from './components/Aside/CohortPanel/CohortPanel';
import ListData from './components/Aside/CohortPanel/ListData/ListData';
import Aside from './components/Aside/Aside';
import data from './data/data.json';
import './App.scss'

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const uniqueCohorts = [...new Set(data.map(student => student.cohort.cohortCode))] // remove duplicate seasons and place into an array
  const cohortList = uniqueCohorts.map(cohort => { // create an arr of objs for each season and year
     const cohortArr = cohort.split(/(\d+)/);
     const season = cohortArr[0];
     const year = Number(cohortArr[1]);
  
     return {
      season : season,
      year : year,
      }
  }).sort((a,b) => { // sort the objects by most recent year and then most recent season if year is the same
      const seasons = ['Winter', 'Fall', 'Summer', 'Spring'];
      if(a.year === b.year) {
          return seasons.indexOf(a.season) - seasons.indexOf(b.season)
      }
      else {
          return b.year - a.year
      }
  }).map(obj => `${obj.season} ${obj.year}`) // convert the sorted arr of objs back into a formatted array of strings
  const changeCohort = (clickedCohort) => {
  
    
    setCurrCohort(clickedCohort)
  }

  const [currCohort, setCurrCohort] = useState(false);
  const [searchedStudent, setSearchedStudent] = useState(false);
  const filteredList = currCohort ? data.filter(student =>  student.cohort.cohortCode === currCohort) : data;
  const searchedList = filteredList.filter(student => {
    const {preferredName, surname} = student.names;

    return preferredName.includes(searchedStudent) || surname.includes(searchedStudent); 

  })

  return (
    <>
    {isDesktopOrLaptop ?
    <div className="container">
      <Aside children={<CohortPanel  children={<ListData desktopActive={isDesktopOrLaptop} cohorts={cohortList} clickAction={changeCohort} activeState={currCohort}/>}/>} />
      <div className="container__body">
        <Navbar currData={filteredList} updatedData ={searchedList} search={searchedStudent} setSearch={setSearchedStudent} />
        <Page data={filteredList} selectedCohort={currCohort} />
      </div>
    </div>
    : <div className="container">
    <Aside children={<CohortPanel  children={<ListData desktopActive={isDesktopOrLaptop} cohorts={cohortList} clickAction={changeCohort} activeState={currCohort}/>}/>} />
    <div className="container__body">
      <Navbar />
      <Page data={filteredList} selectedCohort={currCohort} />
    </div>
  </div>
    }
   
    </>
  )
}

export default App
  