import React, { useState } from 'react';
import './signup.css';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
  <section style={{paddingTop:"100px"}}>
  <div class="box">
    <div class="form" >
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div class="inputBox"> 
          <input type="text" required="required" id="name" value={name} onChange={handleNameChange} />
          <span>Name</span><i></i>
        </div>
        <div class="inputBox">
          <input type="email" required="required" id="email" value={email} onChange={handleEmailChange} />
        <span>Email</span><i></i>
        </div>
        <div class="inputBox">
          <input type="password" id="password" required="required" value={password} onChange={handlePasswordChange} />
        <span>Password</span>
        <i></i>
        </div>
        <button type="submit" href="https://www.portfolio-maharaaj.netlify.app">Sign up</button>
      </form>
    </div>
    </div></section>
  );
};

export default Signup;
