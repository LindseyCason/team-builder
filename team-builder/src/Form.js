import React, { useState } from "react";



const Form = props =>{

    const [teamMember, setTeamMember] = useState({name: "", location: "", role: "", email: ""})
    
    const changeHandler = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value})
    }

    const Submit = event =>{
        event.preventDefault();
        const newMember = {
            ...teamMember
        };
        props.addNewMember(newMember);
        setTeamMember({name: "", location: "", role: "", email: ""})
    }

    return(
        <form onSubmit={Submit}>
            <label htmlFor="name">Name:</label>
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={teamMember.name}
                onChange={changeHandler}
                />
                <label htmlFor="email">Email:</label>
                <input
                type="text"
                name="email"
                placeholder="E-Mail"
                value={teamMember.email}
                onChange={changeHandler}
                />
                <label htmlFor="role">Role:</label>
                <input
                type="text"
                name="role"
                placeholder="Position Held"
                value={teamMember.role}
                onChange={changeHandler}
                />
               <label htmlFor="role">Location:</label>
                <input
                type="text"
                name="location"
                placeholder="Location"
                value={teamMember.location}
                onChange={changeHandler}
                />
                <button onClick={Submit}>Add New Member</button>
        </form>
    )

}


export default Form;