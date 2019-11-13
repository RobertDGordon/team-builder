import React from 'react';

const Team = props => {
    return (
        <>
        {console.log (props.teams, "display form here")}
            {props.teams.map(team => (
                <div className='card' key={team.id}>
                    <div className='img-wrap'>
                    <img src={`${team.imgurl}`} />
                    </div>
                    <h2>{team.name}</h2>
                    <h3>{team.role}</h3>
                    <p>{team.email}</p>
                    <div className='edit'>
                    <label htmlFor='editMember'>Edit</label>
                    <input type='checkbox' id='editMember' name='editMember'/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Team;