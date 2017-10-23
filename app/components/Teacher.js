import React from 'react';

const Teacher = ({ teacher }) => {
  return (
    <li className="media">
      <div>
        <a href={`/teachers/${teacher.id}`}>
          <img className="media-object"
               src={teacher.image}
               alt={`${teacher.name} image`}/>
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {teacher.name}
        </h4>
        {teacher.email}<br/>
        {`Languages Known: ${teacher.languagesKnown.join(', ')}`}<br/>
        {`Campus: ${teacher.campusName}`}<br/>
        {`Students: ${teacher.students
          .map(student => student.name)
          .join(', ')}`}
      </div>
      {/*<a>*/}
      <div className="button-div">
        <button className="delete-btn">x</button>
      </div>
      {/*</a>*/}
    </li>
  );
};

export default Teacher