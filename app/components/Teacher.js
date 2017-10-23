import React from 'react';

const Teacher = props => {
  const { teacher } = props;

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
        {teacher.languagesKnown.join(', ')}<br/>
        {teacher.campusName}
        {teacher.students.join(', ')}
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