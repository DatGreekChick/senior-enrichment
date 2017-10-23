import React from 'react';

const Student = ({ student }) => {
  return (
    <li className="media">
      <div>
        <a href={`/students/${student.id}`}>
          <img className="media-object"
               src={student.image}
               alt={`${student.name} image`}/>
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {student.name}
        </h4>
        {student.email}<br/>
        {`Campus: ${student.campusName}`}<br/>
        {`Teacher: ${student.teacher.name}`}
      </div>
      {/*<a>*/}
        <div className="button-div">
          <button className="delete-btn">x</button>
        </div>
      {/*</a>*/}
    </li>
  );
};

export default Student