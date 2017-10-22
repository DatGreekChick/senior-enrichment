import React from 'react';

const Students = props => {
  return <div className="students">
    <ul>
      {props.students.map((student, i) => {
        return <li key={`student ${i}`}>{student}</li>
      })}
    </ul>
  </div>
};

export default Students