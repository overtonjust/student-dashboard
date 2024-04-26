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

  const [currCohort, setCurrCohort] = useState(false);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState(false);
  const [sort, setSort] = useState(false);

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
  
  const updateSelect = (value) => {

   setSelect(data.filter(student => {
    const codewarsCurrent = student.codewars.current;
    const certs = student.certifications;
    const verified = certs.resume && certs.linkedin && certs.mockInterview && certs.github && codewarsCurrent.total > 600;
    const notes = student.notes.length;

    switch(value) {
      case false:
        return student;

      case 'verified':
        return verified;
      
      case 'notes':
        return notes >= 1;
    }
    
  }))}

  const filteredList = currCohort ? data.filter(student =>  student.cohort.cohortCode === currCohort) : data;

  const selectedFilter = filteredList.filter(student => {
    if(!select) {
      return student;
    }
   else if(select.includes(student)) {
      return student
    }
  });
 

  const searchedList = selectedFilter.filter(student => {
    const {preferredName, surname} = student.names;
    const consistentFirst = preferredName.toLowerCase();
    const consistentLast = surname.toLowerCase();

    return consistentFirst.includes(search.toLowerCase()) || consistentLast.includes(search.toLowerCase()) ; 

  }).sort((student1,student2) => {
    const firstName = student1.names.preferredName.toLowerCase().charAt(0);
    const lastName = student2.names.preferredName.toLowerCase().charAt(0);
    const firstPoints = student1.codewars.current.total;
    const secondPoints = student2.codewars.current.total;

      switch(sort) {
        case 'ascending':
          return firstName.localeCompare(lastName);
          
        case 'descending':
          return lastName.localeCompare(firstName);
        
        case 'ascendingPoints':
          return firstPoints - secondPoints;
        
        case 'descendingPoints' :
          return secondPoints - firstPoints;
        }

  })

  return (
    <>
    {isDesktopOrLaptop ?
    <div className="container">
      <Aside children={<CohortPanel  children={<ListData desktopActive={isDesktopOrLaptop} cohorts={cohortList} clickAction={changeCohort} activeState={currCohort}/>}/>} />
      <div className="container__body">
        <Navbar  input={search} setInput={setSearch} select={select} updateSelect={updateSelect} />
        <Page data={searchedList} selectedCohort={currCohort} dropdownOption={setSort} />
      </div>
    </div>
    : <div className="container">
      I'm mobile
    <Aside children={<CohortPanel  children={<ListData desktopActive={isDesktopOrLaptop} cohorts={cohortList} clickAction={changeCohort} activeState={currCohort}/>}/>} />
    <div className="container__body">
      <Navbar value={search} setValue={setSearch} />
      <Page data={searchedList} selectedCohort={currCohort} dropdownOption={setSort}/>
    </div>
  </div>
    }
   
    </>
  )
}

export default App
  