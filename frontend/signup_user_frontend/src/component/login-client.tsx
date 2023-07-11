import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginUser: React.FC = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleUsernameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setUsername(e.target.value)
}

const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value)
}

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/clients/login', {
        username,
        password,
      });
      const token = localStorage.setItem("token",response.data.jwt);
      if(response.data.status === 404){
        setError('not found');
      }
      else{
        navigate('/dashboard',{state :{ username} })
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='login-container'>
      <form className='form' onSubmit={handleLogin} >
      <h2>Login User</h2>
      <div>
        <label htmlFor='username'>Username: </label>
      <input
        type='text'
        id='username'
        placeholder='Username'
        value={username}
        onChange={handleUsernameChange}
      />
      </div>

      <div>
      <label htmlFor='password'>Password: </label>
      <input
        type="password"
        id='password'
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      </div>
      <button type='submit'>Login</button>
    </form>
    </div>

  );
};

export default LoginUser;
