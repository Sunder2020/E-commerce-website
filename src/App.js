import React, { useState } from "react";
import Routers from "./Components/Navigation/Routers";
import Login from "./Components/Forms/Login"; 
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchAppBar from "./Components/Navbar/SearchAppBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = () => {
    // Logic to handle successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic to handle logout
    setIsLoggedIn(false);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {!isLoggedIn && <Login onLogin={handleLogin} />}

        {isLoggedIn && (
          <>
            <SearchAppBar
              darkMode={darkMode}
              onDarkModeToggle={handleDarkModeToggle}
              onLogout={handleLogout} 
            />
            <Routers />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
