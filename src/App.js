import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Team from './components/Team';
import Form from './components/Form'

import './App.css';

function App() {

  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Robert Gordon",
      email: "notmyrealemail@fakemails.com",
      role: "Captain Obvious"
    }
  ]);

  const addTeam = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    };
    setTeam([...team, newTeam]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Go Team!</h1>
      </header>
    <div className='team-cards'>
      <Form addTeam={addTeam}/>
      <Team team={team} />
    </div>
    </div>
  );
}

export default App;
