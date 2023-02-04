import React, { Component } from 'react';
import './Header.css'

class Header extends Component  {
  render() {
    return (
      <header className="header">
        <nav>
          <img src="https://global-uploads.webflow.com/60fecf41829404658128edbe/63d8aab27f55f1e4deeec974_tlahrb-XHgBWi1F1lJxDlbsNh3STgr_YLvD9-EmGVLw.png" 
          alt="lemon-logo"
          className="lemon"/>
          <ul>
            <li><a href="https://www.energialemon.com.br/">Home</a></li>
            <li><a href="https://www.energialemon.com.br/sobre">About</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
