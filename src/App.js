import General from "./components/General.js"
import Educational from "./components/Educational.js"
import Practical from "./components/Practical.js"
import React, { Component } from 'react';


import './styles/App.css';

// Responsible for rendering input form

function Position(){
  return(
    <h1 className="heading">Title Page</h1>
  );
}
function App() {
  return (
    <div>
      <Position/>
      <div className="container">
        <General classname="sectionCard" />
        <Educational classname="sectionCard" />
        <Practical classname="sectionCard" />
      </div>
    </div>

  );
}

export default App;