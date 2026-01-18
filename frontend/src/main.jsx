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
  background-image: url("/background-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
 .dashboard-bg{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100%;
  border-radius:20px;
  padding:20px;
}


.dashboard-overlay{
  background:rgba(0,0,0,0.25);
  backdrop-filter: blur(6px);
  padding:20px;
  border-radius:18px;
}


/* APP */
.app {
  width:100vw;
  height:100vh;
  border-radius:28px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  background: linear-gradient(135deg,#FFD1DC,#FFCFE0,#FFF0F5,#FFE5F5);
  box-shadow:0 0 30px rgba(255,209,220,.4);
}

/* HEADER */
.header {
  padding:38px;
  font-weight:bold;
  font-size:42px;
  color:#89CFF0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background: linear-gradient(90deg,#FFA8D8,#FF9AD1,#FF85CC);
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
  font-size:18px;
  margin-bottom:14px;
  background:#FFF0F5;
  color:#333;
  box-shadow:0 8px 18px rgba(255,179,217,.15);
  transition:.3s ease;
}

.card:hover {
  transform: translateY(-6px) scale(1.03);
}

/* TITLES */
h3 {
  margin-bottom:20px;
  color:#D64A8C;
  font-size:28px;
}

/* INPUT */
input {
  padding:12px;
  border-radius:14px;
  border:none;
  outline:none;
  width:70%;
  background:#FFF0F5;
  font-size:18px;
}

select {
  padding:12px;
  border-radius:14px;
  border:2px solid #FFB3D9;
  background:#FFF0F5;
  font-size:18px;
  cursor:pointer;
  color:#D64A8C;
  font-weight:bold;
  width:70%;
  transition:.2s ease;
}

select:hover {
  border-color:#FFA8CF;
  background:#FFE5F5;
}

select:focus {
  outline:none;
  border-color:#FF85CC;
  box-shadow:0 0 10px rgba(255,179,217,.4);
}

.mood-question {
  font-size:20px;
  font-weight:bold;
  color:#D64A8C;
  margin-bottom:14px;
  text-align:center;
}

.mood-card {
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:12px;
}

/* BUTTON */
button {
  padding:14px 24px;
  border-radius:16px;
  border:none;
  cursor:pointer;
  font-weight:bold;
  font-size:18px;
  background: linear-gradient(135deg,#FFB3D9,#FFC0CB);
  color:#D64A8C;
  box-shadow:0 6px 12px rgba(255,179,217,.3);
  transition:.2s ease;
}

button:hover {
  transform: scale(1.1);
  background: linear-gradient(135deg,#FFA8CF,#FFB8D9);
}

/* NAV */
.nav {
  display:flex;
  justify-content:space-around;
  padding:18px 0;
  background: linear-gradient(90deg,#FFB3D9,#FFC0CB,#FFD1DC);
}

.nav div {
  color:#D64A8C;
  font-weight:bold;
  cursor:pointer;
  transition:.2s;
  font-size:22px;
}

.nav div:hover {
  transform: scale(1.2);
  color:#E75480;
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

/* GRAPH STYLES */
.graph-container {
  display:flex;
  flex-direction:column;
  gap:20px;
  padding:20px;
}

.chart-wrapper {
  padding:20px;
  background:#FFF0F5;
  border-radius:20px;
  box-shadow:0 8px 18px rgba(255,179,217,.15);
}

.chart-controls {
  display:flex;
  justify-content:center;
  align-items:center;
  gap:15px;
  padding:16px;
}

.chart-controls label {
  font-size:18px;
  font-weight:bold;
  color:#D64A8C;
}

.chart-controls .mood-select {
  width:auto;
  min-width:200px;
}

.mood-summary {
  padding:20px;
  background:linear-gradient(135deg,#FFE5F5,#FFF0F5);
  border-radius:20px;
}

.mood-summary h4 {
  color:#D64A8C;
  margin-top:0;
  font-size:22px;
}

.summary-stats {
  display:flex;
  justify-content:space-around;
  gap:20px;
  flex-wrap:wrap;
}

.stat {
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:15px;
  background:#FFF0F5;
  border-radius:15px;
  border:2px solid #FFB3D9;
}

.stat-label {
  font-size:14px;
  color:#D64A8C;
  font-weight:bold;
  margin-bottom:8px;
}

.stat-value {
  font-size:24px;
  font-weight:bold;
  color:#FF85CC;
}

.refresh-btn {
  align-self:center;
  padding:12px 30px;
  font-size:18px;
  background:linear-gradient(135deg,#FFB3D9,#FFC0CB);
  color:#D64A8C;
  border:none;
  border-radius:16px;
  cursor:pointer;
  font-weight:bold;
  transition:.2s ease;
  margin-top:10px;
}

.refresh-btn:hover {
  transform:scale(1.1);
  background:linear-gradient(135deg,#FFA8CF,#FFB8D9);
}

/* ANIMATED CHILDREN STICKERS */
.mood-container {
  display:flex;
  align-items:flex-start;
  gap:30px;
  position:relative;
  width:100%;
  min-height:450px;
  padding:30px 20px;
}

.animated-stickers {
  display:flex;
  flex-direction:column;
  gap:40px;
  align-items:center;
  flex:0 0 80px;
  padding:30px 0;
  min-height:400px;
}

.animated-stickers-right {
  display:flex;
  flex-direction:column;
  gap:40px;
  align-items:center;
  flex:0 0 80px;
  padding:30px 0;
  min-height:400px;
}

.sticker {
  font-size:60px;
  animation:float 3s ease-in-out infinite;
  cursor:pointer;
  transition:transform .2s ease;
  display:flex;
  align-items:center;
  justify-content:center;
  filter:drop-shadow(0 4px 6px rgba(255,179,217,.3));
}

.sticker:hover {
  transform:scale(1.2) rotate(10deg);
}

.sticker-1 {
  animation-delay:0s;
}

.sticker-2 {
  animation-delay:0.5s;
}

.sticker-3 {
  animation-delay:1s;
}

.sticker-4 {
  animation-delay:0.3s;
}

.sticker-5 {
  animation-delay:0.8s;
}

.sticker-6 {
  animation-delay:1.3s;
}

@keyframes float {
  0%, 100% {
    transform:translateY(0px);
  }
  50% {
    transform:translateY(-20px);
  }
}

.mood-content {
  flex:1;
  display:flex;
  flex-direction:column;
  gap:15px;
  min-width:300px;
}

/* STICKER CONTAINER FOR LOGIN & GRAPH */
.sticker-container {
  display:flex;
  align-items:flex-start;
  gap:30px;
  position:relative;
  width:100%;
  min-height:300px;
  padding:30px 20px;
}

.login-content {
  flex:1;
  display:flex;
  flex-direction:column;
  gap:15px;
  min-width:300px;
}

/* GRAPH STICKER LAYOUT */
.graph-sticker-wrapper {
  display:flex;
  align-items:flex-start;
  gap:30px;
  position:relative;
  width:100%;
}

.graph-content {
  flex:1;
  display:flex;
  flex-direction:column;
  gap:15px;
}

/* CHAT STICKER LAYOUT */
.chat-sticker-container {
  display:flex;
  align-items:center;
  gap:30px;
  position:relative;
  width:100%;
  min-height:350px;
  padding:20px;
}

.robot-sticker {
  display:flex;
  align-items:center;
  justify-content:center;
  flex:0 0 100px;
  min-height:100px;
}

.robot {
  font-size:80px;
  animation:bounce 2s ease-in-out infinite;
  filter:drop-shadow(0 4px 8px rgba(255,179,217,.4));
}

.sticker-robot {
  animation:bounce 2s ease-in-out infinite !important;
}

.chat-content {
  flex:1;
  display:flex;
  flex-direction:column;
  gap:15px;
  min-width:300px;
  height:350px;
}

.chat-box-square {
  width:100%;
  height:100%;
  min-height:350px;
  max-height:350px;
  background:#FFF0F5;
  border-radius:20px;
  padding:20px;
  display:flex;
  flex-direction:column;
  box-shadow:0 8px 18px rgba(255,179,217,.15);
  border:2px solid #FFB3D9;
}

.ai-reply {
  flex:1;
  overflow-y:auto;
  padding:15px;
  background:linear-gradient(135deg,#FFE5F5,#FFF0F5);
  border-radius:15px;
  font-size:16px;
  color:#333;
  line-height:1.6;
  border:2px solid #FF85CC;
}

.ai-placeholder {
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#D64A8C;
  font-size:18px;
  font-weight:bold;
  font-style:italic;
  opacity:0.6;
}

.chat-input-section {
  display:flex;
  gap:12px;
  padding-top:15px;
  border-top:2px solid #FFB3D9;
  align-items:stretch;
  justify-content:space-between;
}

.chat-input {
  flex:1;
  padding:14px;
  border-radius:12px;
  border:2px solid #FFB3D9;
  background:#FFFFFF;
  font-size:16px;
  color:#333;
  transition:.2s ease;
}

.chat-input:focus {
  outline:none;
  border-color:#FF85CC;
  box-shadow:0 0 10px rgba(255,179,217,.3);
}

.chat-send-button {
  padding:14px 28px;
  border-radius:12px;
  border:none;
  background:linear-gradient(135deg,#FFB3D9,#FFC0CB);
  color:#D64A8C;
  font-weight:bold;
  font-size:16px;
  cursor:pointer;
  transition:.2s ease;
  flex-shrink:0;
  box-shadow:0 4px 12px rgba(255,179,217,.3);
  white-space:nowrap;
  margin-left:auto;
}

.chat-send-button:hover {
  transform:scale(1.08);
  background:linear-gradient(135deg,#FFA8CF,#FFB8D9);
  box-shadow:0 6px 16px rgba(255,179,217,.4);
}

.chat-send-button:active {
  transform:scale(0.95);
}

@keyframes bounce {
  0%, 100% {
    transform:translateY(0px) scale(1);
  }
  50% {
    transform:translateY(-15px) scale(1.1);
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
