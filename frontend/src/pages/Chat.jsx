import { useState } from "react";
import { askAI } from "../services/api";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const send = async () => {
    if (!msg.trim()) return;
    const r = await askAI(msg);
    setReply(r.reply);
    setMsg("");
  };

  return (
    <>
      <h3>🤖 AI Assistant</h3>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={send}>Ask</button>
      </div>

      {reply && <div className="card chat-box">{reply}</div>}
    </>
  );
}
