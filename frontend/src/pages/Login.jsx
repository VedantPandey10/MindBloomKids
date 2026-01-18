export default function Login(){
  return (
    <>
      <h3>🔐 Login</h3>

      <div className="sticker-container">
        <div className="animated-stickers">
          <div className="sticker sticker-1">👧</div>
          <div className="sticker sticker-2">🧒</div>
        </div>

        <div className="login-content">
          <div className="card">
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </div>
        </div>

        <div className="animated-stickers-right">
          <div className="sticker sticker-4">👦</div>
          <div className="sticker sticker-5">🧒</div>
        </div>
      </div>
    </>
  );
}
