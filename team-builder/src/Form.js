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
        setTeamMember({name: "", location: "", role: "", email: "", age: ""})
    }

    return(
        <div className="formDiv">
        <form className="formStack" onSubmit={Submit}>
            <label htmlFor="name" >Name:</label>
                <input className="input"
                type="text"
                name="name"
                placeholder="Name"
                value={teamMember.name}
                onChange={changeHandler}
                />
            <label htmlFor="age">Age:</label>

                <input className="input"
                type="text"
                name="age"
                placeholder="Age"
                value={teamMember.age}
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
                <button onClick={Submit}>JOIN</button>
            

        </form></div>
    )

}


export default Form;