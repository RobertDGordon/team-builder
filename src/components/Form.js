import React, { useState } from 'react';

const Form = props => {
    const [team, setTeam] = useState({
        name: "",
        role: "",
        email: ""
    });
    const handleChanges = e => {
        setTeam({...team, [e.target.name]: e.target.value});
        console.log (e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();
        props.addTeam(team);
        setTeam({name:"", role:"", email:""})
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name"></label>
            <input id="name" type="text" name="name" onChange={handleChanges} value={team.name} />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default Form;