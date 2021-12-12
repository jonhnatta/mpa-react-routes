import React from "react";
import { Link } from "react-router-dom";

import '../styles/header.css';

function Header() {
  return (
    <div className="header-container">
      <header className="header header-container">
        <h1><Link to="/">Logo</Link></h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header