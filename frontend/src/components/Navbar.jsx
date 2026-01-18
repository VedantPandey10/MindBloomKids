export default function Navbar({ setPage }) {
  return (
    <div className="nav">
      <div onClick={() => setPage("dashboard")}>🏠 Home</div>
      <div onClick={() => setPage("mood")}>😊 Mood</div>
      <div onClick={() => setPage("graph")}>📊 Graph</div>
      <div onClick={() => setPage("chat")}>🤖 AI</div>
      <div onClick={() => setPage("login")}>🔐 Login</div>
    </div>
  );
}
