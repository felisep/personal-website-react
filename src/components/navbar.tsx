import React from 'react';
import './navbar.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Navbar = () =>{
  return (
  <div>
    <ul>
      <li>
        <Link to="/">Index</Link>
      </li>
      <li>
        <Link to="/infopage">Information</Link>
      </li>
      <li>
        <Link to="/api">api</Link>
      </li>
    </ul>
  </div>
  );
}

export default Navbar;