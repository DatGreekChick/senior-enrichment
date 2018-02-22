import React from 'react'

export default ({ campus }) => <li className="media">
  <div>
    <a href={`/campuses/${campus.id}`}>
      <img className="media-object"
           src={campus.image}
           alt={`${campus.name} image`}/>
    </a>
  </div>
  <div className="media-body">
    <h4 className="media-heading">
      {campus.name}
    </h4>
    {`${campus.city}, ${campus.location}`}<br/>
    {`Teachers: ${campus.teachers
      .map(teacher => teacher.name).join(', ')}`}<br/>
    {`Students: ${campus.students
      .map(student => student.name).join(', ')}`}
  </div>
  {/*<a>*/}
  <div className="button-div">
    <button className="delete-btn">x</button>
  </div>
  {/*</a>*/}
</li>