import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('')
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };


  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/clients/signup', {
        email,
        username,
        password,
      });
      
      navigate('/login')
      alert('successfully signup')

    } catch (error) {
      alert('user is already registered');
      console.error(error);
    }

  };

  return (
    <div className='container'>
    <form className='form' onSubmit={handleSignUp}>
    <h2>Register User</h2>

      <div>
        <label>Email:</label>
        <input type="email" value={email} placeholder='Email' onChange={handleEmailChange} required/>
      </div>

      <div>
        <label>Username:</label>
        <input type="text" value={username} placeholder='Username' onChange={handleUsernameChange} required />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default SignupForm;
