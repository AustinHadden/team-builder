import React from "react";

const Members = props => {
  //console.log(props);
  return (
    <div className="member-list">
      {props.memberList.map((member, index) => {
        return (
          <div className="member" key={index}>
            <h2>{member.name}</h2>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default Members;