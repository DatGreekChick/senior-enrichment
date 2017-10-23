import React from 'react';

const Student = props => {
  const { student } = props;

  return (
    <li className="media">
      <div className="media=left">
        {/*<a href={`/students/${student.id}`}>*/}
          <img className="media-object"
               src={student.image}
               alt={`${student.name} image`}/>
        {/*</a>*/}
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {student.name}
        </h4>
        {student.email}<br/>
        {student.campusName}
      </div>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Student