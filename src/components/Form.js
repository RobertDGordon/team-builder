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
        props.addNewTeam(team);
        setTeam({name:"", role:"", email:""})
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" onChange={handleChanges} value={team.name} />
            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="role" onChange={handleChanges} value={team.role} />
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" onChange={handleChanges} value={team.email} />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default Form;