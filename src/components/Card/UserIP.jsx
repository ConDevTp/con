import { useState, useEffect } from "react";
import "./cards.css";

function UserIP({ status }) {
  const [ip, setIP] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIP(data.ip))
      .catch((err) => console.error("Cannot get IP:", err));
  }, []);

  return (
    <h4 className={status === "failed" ? "failed-text" : ""}>
      {ip || "Loading..."}
    </h4>
  );
}

export default UserIP;
