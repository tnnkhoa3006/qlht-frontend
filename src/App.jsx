import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api") // ✅ chỉ cần gọi /api, Nginx sẽ proxy sang backend:5000
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h1>React + Express + Docker</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
