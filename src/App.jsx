import { useState } from 'react'

import Header from './components/Header';
import CohortPanel from './components/CohortPanel';
import Page from './components/Page';

import data from './data/data.json';
import './App.scss'

function App() {
  console.log(data[0])

  return (
    <>
    <div className="container">
      <Header/>
      <div className="container__body">
        <CohortPanel />
        <Page />
      </div>
    </div>
      
    </>
  )
}

export default App
