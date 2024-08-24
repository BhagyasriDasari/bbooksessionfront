// src/pages/Home.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Welcome to CareerCarve</h1>
        <p>Your platform for scheduling 1x1 sessions with industry experts.</p>
        <div className="navigation-links">
          <Link to="/schedule" className="btn">Schedule a Session</Link>
        </div>
      </div>
    );
  }
}

export default Home;
