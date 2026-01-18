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

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <h3>🤖 AI Assistant</h3>

      <div className="chat-sticker-container">
        <div className="robot-sticker">
          <div className="sticker robot sticker-robot">🤖</div>
        </div>

        <div className="chat-content">
          <div className="chat-box-square">
            {reply && <div className="ai-reply">{reply}</div>}
            {!reply && <div className="ai-placeholder">Waiting for your question...</div>}

            <div className="chat-input-section">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask something..."
                className="chat-input"
              />
              <button onClick={send} className="chat-send-button">Ask ➤</button>
            </div>
          </div>
        </div>

        <div className="animated-stickers-right">
          <div className="sticker sticker-4">👧</div>
          <div className="sticker sticker-5">🧒</div>
          <div className="sticker sticker-6">👦</div>
        </div>
      </div>
    </>
  );
}
