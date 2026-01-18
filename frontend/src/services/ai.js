const API = "http://127.0.0.1:8000";

export async function askAI(prompt) {
  const res = await fetch(
    `${API}/ai/chat?prompt=${encodeURIComponent(prompt)}`,
    { method: "POST" }
  );
  return res.json();
}
