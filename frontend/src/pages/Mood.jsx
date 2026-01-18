import { useState } from "react";

export default function Mood(){

  const [mood,setMood] = useState("");
  const [dayResponse,setDayResponse] = useState("");
  const [likeToDoResponse,setLikeToDoResponse] = useState("");

  return (
    <>
      <h3>😊 Mood Tracker</h3>

      <div className="mood-container">
        <div className="animated-stickers">
          <div className="sticker sticker-1">🧒</div>
          <div className="sticker sticker-2">👧</div>
          <div className="sticker sticker-3">🧒</div>
        </div>

        <div className="mood-content">
          <div className="card mood-card">
            <div className="mood-question">How are you feeling today?</div>
            <select value={mood} onChange={e=>setMood(e.target.value)} className="mood-select">
              <option value="">✨ Select Your Mood</option>
              <option value="1">😢 Sad</option>
              <option value="2">😐 Okay</option>
              <option value="3">😊 Happy</option>
              <option value="4">🤩 Excited</option>
            </select>
          </div>

          <div className="card mood-card">
            <div className="mood-question">How was your day?</div>
            <input type="text" placeholder="Tell us about your day..." value={dayResponse} onChange={e=>setDayResponse(e.target.value)} />
          </div>

          <div className="card mood-card">
            <div className="mood-question">What do you like to do?</div>
            <input type="text" placeholder="Tell us what you enjoy..." value={likeToDoResponse} onChange={e=>setLikeToDoResponse(e.target.value)} />
          </div>

          <div className="card mood-card">
            <button>Save My Day 💾</button>
          </div>

          <div className="card tips">
            ✨ Tip: Your feelings are important! Talk about what makes you happy 💖
          </div>
        </div>

        <div className="animated-stickers-right">
          <div className="sticker sticker-4">👦</div>
          <div className="sticker sticker-5">🧒</div>
          <div className="sticker sticker-6">👧</div>
        </div>
      </div>
    </>
  );
}
