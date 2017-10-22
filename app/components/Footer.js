import React from 'react';
import {
  EntypoFacebookWithCircle,
  EntypoGithubWithCircle,
  EntypoInstagramWithCircle,
  EntypoTwitterWithCircle,
  EntypoMailWithCircle
} from 'react-entypo';
// import { connect } from 'react-redux';
// import store from '../store.jsx';

const Footer = () => {
  return <footer>
    <span>&copy; 2017 The Witcher Coding Academy</span>
    <span>
      <EntypoFacebookWithCircle/>
      <EntypoInstagramWithCircle/>
      <EntypoTwitterWithCircle/>
      <EntypoGithubWithCircle/>
      <EntypoMailWithCircle/>
    </span>
  </footer>
};

export default Footer