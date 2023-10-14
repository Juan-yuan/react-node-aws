import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');

  const handleLogin = () => {
    if (userId.trim() !== '') {
      onLogin(userId);
    } else {
      alert('Please enter a user ID');
    }
  };

  return (
    <div className="login">
      <div className="left">
      <h1>Welcome!</h1>
      <input
        className="login-input"
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <div className="wrapper-button">
        <button className="button" onClick={handleLogin}>Login</button>
      </div>
      
      </div>
      <div className="right">
        111
      </div>
      
    </div>
  );
};

export default Login;
