import React from 'react';
import './App.css';
import './component/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpUser from './component/signup-client';
import LoginUser from './component/login-client';
import Dashboard from './component/dashboard-client';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<SignUpUser/>} />
        <Route path="/login" element={<LoginUser/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
