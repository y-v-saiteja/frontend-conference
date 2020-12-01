import React, { useState, useEffect } from 'react';
import Techconference from './Techconference';
import './App.css';

function App() {
  const [techConferences, setTechConferences] = useState([]);
  const [searchedConferences, setSearchedConferences] = useState([]);
  useEffect(()=>{
    fetch('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences')
    .then(data=> data.json())
    .then(data=> {
      setTechConferences([...data.paid,...data.free]);
    })
  },[]);
  
  useEffect(()=>{
    setSearchedConferences(techConferences);
  },[techConferences])

const search = (keyword) =>{
  if(!keyword.target.value){
    setSearchedConferences(techConferences);
    return;
  }
  setSearchedConferences(techConferences
.filter(({confName,city}) => confName.toLowerCase().includes(keyword.target.value.toLowerCase() 
  || city.toLowerCase().includes(keyword.target.value.toLowerCase()))));
}
  return (
    <div className="app">
      <header className="app-header">
        <h1>Technical Conferences</h1>
        <div>
        <input  type = "text" placeholder = "search Conferences" onChange = {search} />
        </div>
      </header>
      <main >
        <div className='main-head'>
        {searchedConferences.map((conferene,index)=> <React.Fragment key = {index}><Techconference  techConference={conferene}/></React.Fragment>)}
        </div>
      </main>
    </div>
  );
}

export default App;
