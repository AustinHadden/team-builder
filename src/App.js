import React, { useState } from 'react';
import Members from "./components/Members";
import './App.css';
import Form from "./components/Form";

function App() {
  const [teamMember, setTeamMember] = useState([{}]);

  const addNewMember = member => {
    setTeamMember([...teamMember, member])
  }
  return (
    <div className="App">
      <h1>Enter a new team-member</h1>      
      <Form addNewMember={addNewMember}/>
      <h1>My Team</h1>
      <Members memberList={teamMember}/>
    </div>
  );
}

export default App;
