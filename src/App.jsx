import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (status) => setIsLoggedIn(status);
    const handleLogout = () => setIsLoggedIn(false);

  return React.createElement('div', { className: 'app-main' },
                                 !isLoggedIn 
                                   ? React.createElement(Login, { onLogin: handleLogin })
                                   : React.createElement(Dashboard, { onLogout: handleLogout })
                               );
}

export default App;
