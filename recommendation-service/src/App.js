import React, { useState } from "react"
import Pages from "./pages/Pages"
import Login from './pages/Login'
import "./scss/main.scss"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const handleLogin = (userId) => {
    setLoggedIn(true);
    setUserId(userId);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Pages userId={userId} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}
export default App
