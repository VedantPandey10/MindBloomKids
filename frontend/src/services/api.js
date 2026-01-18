export async function askAI(prompt) {
  const res = await fetch(
    "http://127.0.0.1:8000/ai/chat?prompt=" + encodeURIComponent(prompt),
    {
      method: "POST",
      headers: {
        "Accept": "application/json"
      }
    }
  );

  return res.json();
}
