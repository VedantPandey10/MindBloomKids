import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import Mood from "./pages/Mood.jsx";
import Chat from "./pages/Chat.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState("dashboard");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <span>MindBloom Kids</span>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙 Dark" : "🌞 Light"}
        </button>
      </div>

      <div className="content">
        {page === "dashboard" && <Dashboard />}
        {page === "mood" && <Mood />}
        {page === "chat" && <Chat />}
        {page === "login" && <Login />}
      </div>

      <Navbar setPage={setPage} />
    </div>
  );
}
