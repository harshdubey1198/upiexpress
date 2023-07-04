import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import './login.css';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset form fields
    setUsername('');
    setPassword('');

    // Redirect to the specified website
    // window.location.href = "https://portfolio-maharaaj.netlify.app";
    // window.location.href="https://harshdubey1198.github.io/Portfolio-hcj/";
  };

  return (
    <section style={{ paddingTop: "100px", textAlign: "center" }}>
      <div className="box">
        <div className="form">
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="text" required="required" value={username} onChange={handleUsernameChange} />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" required="required" value={password} onChange={handlePasswordChange} />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <a href="/">Forgot Password</a>
              <Link to="/Signup">Signup</Link>
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div><button>This is page is under maintenance. </button>
    </section>
  );
}

export default Home;
