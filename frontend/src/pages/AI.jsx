import { useState } from "react";
import { askAI } from "../services/api";

export default function Chat(){

  const [msg,setMsg]=useState("");
  const [reply,setReply]=useState("");
  const [loading,setLoading]=useState(false);

  return(
    <>
      <h3>🤖 AI Assistant</h3>

      <div className="card chat-container">

        {msg && <div className="chat-user">{msg}</div>}

        {loading && <div className="chat-ai typing">AI typing</div>}

        {reply && <div className="chat-ai">{reply}</div>}

      </div>

      <div className="chat-input-row">
        <input
          value={msg}
          onChange={e=>setMsg(e.target.value)}
          placeholder="Type a message..."
        />

        <button onClick={async()=>{
          setLoading(true);
          const r = await askAI(msg);
          setReply(r.reply);
          setLoading(false);
        }}>
          Send
        </button>
      </div>
    </>
  );
}
