import React from 'react';

const Students = props => {
  return <div className="students">
    <ul>
      {props.students.map(student => {
        return <li>{student}</li>
      })}
    </ul>
  </div>
};

export default Students