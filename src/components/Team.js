import React from 'react';

const Team = props => {
    return (
        <div className='team-list'>
            {props.team.map(team => (
                <div className='member' key={team.id}>
                    <h2>{team.name}</h2>
                    <h3>{team.role}</h3>
                    <h3>{team.email}</h3>
                </div>
            ))}
        </div>
    );
};

export default Team;