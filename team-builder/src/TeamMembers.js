import React from "react";

const TeamMembers = props => {
  return (
    <div className="Team-list">
      {props.addNewMember.map(teamMember => {
        return (
          <div className="teamMember" key={teamMember.id}>
            <h2>{teamMember.name} ({teamMember.age})</h2>
            <p>{teamMember.email}</p>
            <p>{teamMember.role}</p>
            <p>{teamMember.location}</p>
          </div>
        );
      })}
    </div>
  );
};
export default TeamMembers;
