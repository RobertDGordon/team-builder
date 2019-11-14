import React, { useState } from 'react';

const Form = props => {

    const [team, setTeam] = useState({
        name: "",
        role: "",
        email: "",
        imgurl: "",
        desc: ""
    });

    const handleChanges = e => {
        setTeam({...team, [e.target.name]: e.target.value});
        // console.log (e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(team);
        // console.log (team)
        setTeam({name:"", role:"", email:"", imgurl:"", desc:""})
    }

    return (
        <div className='team-form'>
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" onChange={handleChanges} value={team.name} />
            <label htmlFor="role">Role:</label>
            <input id="role" type="text" name="role" onChange={handleChanges} value={team.role} />
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" name="email" onChange={handleChanges} value={team.email} />
            <label htmlFor="imgurl">Image:</label>
            <input id="imgurl" type="text" name="imgurl" onChange={handleChanges} value={team.imgurl} />
            <label htmlFor="desc">Description:</label>
            <input id="desc" type="text" name="desc" onChange={handleChanges} value={team.desc} />
            <button type="submit">Add</button>
        </form>
        </div>
    );
};

export default Form;