import React from 'react'
import { Link } from 'react-router-dom'

export default ({ teacher }) => <li className="media">
  <div>
    <Link to={`/teachers/${teacher.id}`}>
      <img className="media-object"
           src={teacher.image}
           alt={`${teacher.name} image`}/>
    </Link>
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