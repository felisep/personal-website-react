import React from 'react';
import './navbar.scss';

import {
  Link
} from "react-router-dom";

const Navbar = () =>{
  return (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link data-test="information_btn" to="/infopage">Information</Link>
      </li>
      <li>
        <Link to="/api">api</Link>
      </li>
    </ul>
  </div>
  );
}

export default Navbar;