import React from 'react';

import Initialization from './components/Initialization';
import PersonalInfo from './components/PersonalInfo';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Connect from './components/Connect';
import "./App.css";

const App = () => {

  return (
    <div className="App">

      <Initialization />

      <PersonalInfo />

      <About />

      <Experience />

      <Education />

      <Skills />

      <Certificates />

      <Connect />

    </div >
  );
}

export default App;

