import React from 'react'
import { Link } from 'react-router-dom'

const logo = 'https://vignette.wikia.nocookie.net/witcher/images/3/38/TW3_English_logo.png/revision/latest?cb=20150923154606'

export default () => <nav className="nav-bar">
  <Link to='/'>
    <img className="logo"
         src={logo}
         alt="witcher-logo"/>
  </Link>
  <Link to='/students'><h3>Students</h3></Link>
  <Link to='/teachers'><h3>Teachers</h3></Link>
  <Link to='/campuses'><h3>Campuses</h3></Link>
</nav>