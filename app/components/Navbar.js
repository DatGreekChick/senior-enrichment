import React from 'react';

import Campuses from './Campuses';
import Teachers from './Teachers';
import Students from './Students';

const Navbar = () => {
  return <div className="nav-bar">
    {/*<Campuses />*/}
    <Students />
    {/*<Teachers />*/}
  </div>
};

export default Navbar