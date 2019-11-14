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
      imgurl: "https://ca.slack-edge.com/T4JUEB3ME-UN66JA72N-44abe8ad8258-512",
      desc: "All work and no play makes Robert a dull boy, all work and no play makes Robert a dull boy, all work and no play makes Robert a dull boy..."
    },
    {
      id: 2,
      name: "Captain Planet",
      email: "powerscombined@zeropollution.org",
      role: "Planeteer",
      imgurl: "https://captainplanetfoundation.org/wp-content/uploads/CaptainPlanet.png",
      desc: "He's our hero. Gonna take pollution down to zero. Gonna help him put asunder, Bad guys who like to loot and plunder."
    },
    {
      id: 3,
      name: "Rick Astley",
      email: "rick@roll.com",
      role: "No Stranger To Love",
      imgurl: "https://jeffdeviller.files.wordpress.com/2011/04/14-rickroll.jpg",
      desc: "He's never going to give you up, never gonna let you down, never gonna run around a desert you, never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you."
    }
  ]);

  const addNewTeam = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role,
      imgurl: team.imgurl,
      desc: team.desc
    };
    setTeams([...teams, newTeam]);
  };

  const editTeam = newTeam =>{
    let teamCopy = [...teams];
    for (let i = 0; i < teamCopy.length; i++){
      if (teamCopy[i].id === newTeam.id) {
        teamCopy.splice(i, 1, newTeam)
      }
    }
    setTeams(teamCopy);
  }

  return (
    <div className="App">
        <h1>Join Team Robert Today!
        </h1>
      <div className='form-card'>
        <Form addNewTeam={addNewTeam}/>
      </div>
      <div className='team-cards'>
        <Team teams={teams} editTeam={editTeam}/>
      </div>
    </div>
  );
}

export default App;
