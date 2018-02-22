import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ student }) => <li className="media">
  <div>
    <NavLink to={`/students/${student.id}`}>
      <img className="media-object"
           src={student.image}
           alt={`${student.name} image`}/>
    </NavLink>
  </div>
  <div className="media-body">
    <h4 className="media-heading">{student.name}</h4>
    {student.email}<br/>
    {`Campus: ${student.campusName}`}<br/>
    {`Teacher: ${student.teacher.name}`}
  </div>
  <div className="button-div">
    <button type="submit" className="delete-btn">x</button>
  </div>
</li>