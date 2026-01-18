import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const style = `
/* RESET */
* {
  box-sizing: border-box;
}

/* BODY */
body {
  margin:0;
  font-family:"Comic Sans MS", "Segoe UI", Arial;
  display:flex;
  justify-content:center;
  align-items:center;
  background: linear-gradient(135deg,#4FC3F7,#81D4FA);
}
  .dashboard-bg{
  background:url("/dashboard-bg.jpg") center/cover no-repeat;
  min-height:100%;
  border-radius:20px;
  padding:20px;
}

.dashboard-overlay{
  background:rgba(0,0,0,0.55);
  backdrop-filter: blur(6px);
  padding:20px;
  border-radius:18px;
}


/* APP */
.app {
  width:90vw;
  max-width:1200px;
  min-height:85vh;
  border-radius:28px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  background: linear-gradient(135deg,#FFD54F,#FF8A80);
  box-shadow:0 0 30px rgba(255,82,82,.4);
}

/* HEADER */
.header {
  padding:18px;
  font-weight:bold;
  font-size:24px;
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background: linear-gradient(90deg,#FF5252,#F48FB1);
}

/* CONTENT */
.content {
  flex:1;
  padding:20px;
  overflow-y:auto;
}

/* CARD */
.card {
  padding:18px;
  border-radius:20px;
  font-size:16px;
  margin-bottom:14px;
  background:#FFFDF7;
  color:#333;
  box-shadow:0 8px 18px rgba(0,0,0,.15);
  transition:.3s ease;
}

.card:hover {
  transform: translateY(-6px) scale(1.03);
}

/* TITLES */
h3 {
  margin-bottom:20px;
  color:#FF5252;
}

/* INPUT */
input {
  padding:12px;
  border-radius:14px;
  border:none;
  outline:none;
  width:70%;
  background:#FFF9C4;
  font-size:16px;
}

/* BUTTON */
button {
  padding:12px 20px;
  border-radius:16px;
  border:none;
  cursor:pointer;
  font-weight:bold;
  background: linear-gradient(135deg,#66BB6A,#43A047);
  color:white;
  box-shadow:0 6px 12px rgba(0,0,0,.2);
  transition:.2s ease;
}

button:hover {
  transform: scale(1.1);
  background: linear-gradient(135deg,#43A047,#66BB6A);
}

/* NAV */
.nav {
  display:flex;
  justify-content:space-around;
  padding:14px 0;
  background: linear-gradient(90deg,#4FC3F7,#81D4FA);
}

.nav div {
  color:white;
  font-weight:bold;
  cursor:pointer;
  transition:.2s;
  font-size:18px;
}

.nav div:hover {
  transform: scale(1.2);
  color:#FFD54F;
}

/* CHAT CONTAINER */
.chat-container {
  display:flex;
  flex-direction:column;
  gap:10px;
  max-height:320px;
  overflow-y:auto;
  padding:10px;
  border-radius:18px;
  background:#E3F2FD;
}

/* USER MESSAGE */
.chat-user {
  align-self:flex-end;
  background:linear-gradient(135deg,#66BB6A,#A5D6A7);
  color:#1B5E20;
  padding:10px 14px;
  border-radius:16px 16px 4px 16px;
  max-width:70%;
  font-size:15px;
  box-shadow:0 0 10px rgba(102,187,106,.5);
}

/* AI MESSAGE */
.chat-ai {
  align-self:flex-start;
  background:linear-gradient(135deg,#FF8A80,#F48FB1);
  color:white;
  padding:10px 14px;
  border-radius:16px 16px 16px 4px;
  max-width:70%;
  font-size:15px;
  box-shadow:0 0 12px rgba(244,143,177,.5);
}

/* INPUT ROW */
.chat-input-row {
  display:flex;
  gap:10px;
  margin-top:12px;
}

/* MOBILE */
@media(max-width:768px){
  .app {
    width:96vw;
    min-height:90vh;
  }
}

`;   // 👈 THIS WAS MISSING

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <style>{style}</style>
      <App />
    </>
  </React.StrictMode>
);
