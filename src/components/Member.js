import React, { useState } from 'react';

const Member = props => {
    const team = props.team;

    const [editing, setEditing] = useState(false)

    // const [team, setTeam] = useState({
    //     name: "",
    //     role: "",
    //     email: "",
    //     imgurl: "",
    //     desc: ""
    // });

    const [editTeam, setEditTeam] = useState ({
        name: team.name,
        role: team.role,
        email: team.email,
        imgurl: team.imgurl,
        desc: team.desc,
        id: team.id,
    })

    const handleChanges = e => {
        setEditTeam({...team, [e.target.name]: e.target.value});
        // console.log (e.target.value);
    }

    const handleEdit = e =>{
        e.preventDefault();
        setEditing(true)
    }

    const submitEdit = e =>{
        e.preventDefault();
        // console.log (props.editTeam)
        props.editTeam(editTeam)
        setEditTeam(editTeam)
        setEditing(false)
    }

    return (
        <>
        {editing ? (
            <>
                <div className='img-wrap'>
                <img src={`${team.imgurl}`} />
                </div>
                <div className='info'>
                <form onSubmit={submitEdit}>
                <label htmlFor="name">Name:</label>
                <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    onChange={handleChanges} 
                    value={editTeam.name} 
                    defaultValue={team.name}
                />
                <label htmlFor="role">Role:</label>
                <input id="role" type="text" name="role" onChange={handleChanges} value={editTeam.role} defaultValue={team.role} />
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" name="email" onChange={handleChanges} value={editTeam.email} defaultValue={team.email} />
                <label htmlFor="imgurl">Image:</label>
                <input id="imgurl" type="text" name="imgurl" onChange={handleChanges} value={editTeam.imgurl} defaultValue={team.imgurl} />
                <label htmlFor="desc">Description:</label>
                <input id="desc" type="text" name="desc" onChange={handleChanges} value={editTeam.desc} defaultValue={team.desc} />
                <button type="submit">Submit Edit</button> 
                </form>
                </div>
                
                </>
            ) : (
                <>
                <div className='img-wrap'>
                <img src={`${team.imgurl}`} />
                </div>
                <div className='info'>
                <h2>{team.name}</h2>
                <h3>{team.role}</h3>
                <p className='email'>{team.email}</p>
                <p>{team.desc}</p>
                </div>
                <div className='edit'>
                {/* <label htmlFor='editMember'>Edit</label>
                <input type='checkbox' id='editMember' name='editMember' onChange={props.memberToEdit(team.id)}/> */}
                <button onClick={handleEdit}>Edit</button>
                </div>
                </>
            )}
    </>
    )
}

export default Member;