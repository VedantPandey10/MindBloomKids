import { useState } from "react";

export default function Mood(){

  const [mood,setMood] = useState("");

  return (
    <>
      <h3>😊 Mood Tracker</h3>

      <div className="card mood-card">
        <select value={mood} onChange={e=>setMood(e.target.value)}>
          <option value="">Select Mood</option>
          <option value="1">😢 Sad</option>
          <option value="2">😐 Okay</option>
          <option value="3">😊 Happy</option>
          <option value="4">🤩 Excited</option>
        </select>

        <button>Save Mood</button>
      </div>

      <div className="card tips">
        Tip: Talk about your feelings today 💛
      </div>
    </>
  );
}
