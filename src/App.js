import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Team from './components/Team';
import Form from './components/Form'

import './App.css';

function App() {

  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Robert Gordon",
      email: "notmyrealemail@fakemails.com",
      role: "Captain Obvious"
    }
  ]);

  const addNewTeam = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    };
    setTeams([...teams, newTeam]);
  };

  return (
    <div className="App">

        <h1>Go Team!</h1>

    <div className='team-cards'>
      <Form addNewTeam={addNewTeam}/>
      <Team teams={teams} />
    </div>
    </div>
  );
}

export default App;
