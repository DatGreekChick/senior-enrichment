import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import store from '../store.jsx';

// this is hard-coded (h3's)
const Navbar = () => {
  return <nav className="nav-bar">
    {/*<Link to={'/students'}>*/}<h3>Students</h3>{/*</Link>*/}
    {/*<Link to={'/teachers'}>*/}<h3>Teachers</h3>{/*</Link>*/}
    {/*<Link to={'/campuses'}>*/}<h3>Campuses</h3>{/*</Link>*/}
  </nav>
};

export default Navbar

/*
const ChannelList = props => {
  return (
    <ul>
      {
        props.channels.map(channel => {
          return (
              <li key={channel.id || Math.random()}>
                <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                  <span># {channel.name}</span>
                  <span className="badge">{
                      props.messages.filter(message => message.channelId === channel.id).length
                    }
                  </span>
                </NavLink>
              </li>
          );
        })
      }
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({
    channels: state.channels,
    messages: state.messages
});

const navBarContainer = connect(mapStateToProps)(Navbar);
export default navbarContainer;
 */