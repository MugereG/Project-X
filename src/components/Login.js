import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    const validUsername = 'exampleUser';
    const validPassword = 'examplePassword';

    if (username === validUsername && password === validPassword) {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <div>
          <h2>Login</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
