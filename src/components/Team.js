import React from 'react';
import Member from "./Member"

const Team = props => {
    // (console.log(props.teams))
    return (
        <>
        
            {props.teams.map(team => (
                <div className='card' key={team.id}>
                    {/* {console.log (team)} */}
                    <Member editTeam={props.editTeam} team={team}/>
                </div>
            ))}
        </>
    );
};

export default Team;