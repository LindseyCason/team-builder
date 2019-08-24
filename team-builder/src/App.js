import React, { useState } from "react";
import './App.css';
import Form from "./Form";
import Data from "./Data";
import TeamMembers from "./TeamMembers";

function App() {
const [teamMembers, setTeamMembers] = useState(Data);
console.log(teamMembers)
const addNewMember = teamMember => {
  setTeamMembers([...teamMembers, teamMember]);
};


  return (
    <div className="App">
      <header>
      <h1>JOIN THE TEAM?</h1>
      <Form addNewMember={addNewMember} />
      </header>
     
      <h1>CURRENT MEMBERS</h1>
      <TeamMembers addNewMember={teamMembers} />

    </div>
  );
}

export default App;
