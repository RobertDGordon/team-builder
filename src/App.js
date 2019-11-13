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
      role: "Captain Obvious",
      imgurl: "https://ca.slack-edge.com/T4JUEB3ME-UN66JA72N-44abe8ad8258-512"
    },
    {
      id: 2,
      name: "Captain Planet",
      email: "powerscombined@zeropollution.org",
      role: "Planeteer",
      imgurl: "https://captainplanetfoundation.org/wp-content/uploads/CaptainPlanet.png"
    }
  ]);

  const addNewTeam = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role,
      imgurl: team.imgurl
    };
    setTeams([...teams, newTeam]);
  };

  const memberToEdit = team=> {

  };

  return (
    <div className="App">
        <h1>Go Team!</h1>
      <div className='form-card'>
        <Form addNewTeam={addNewTeam}/>
      </div>
      <div className='team-cards'>
        <Team teams={teams} memberToEdit={memberToEdit}/>
      </div>
    </div>
  );
}

export default App;
