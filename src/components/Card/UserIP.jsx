import { useState, useEffect } from "react";
import "./cards.css";

function UserIP({ status, isChange }) {
  const [ip, setIP] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIP(data.ip))
      .catch((err) => console.error("Cannot get IP:", err));
  }, [isChange]);

  return (
    <h4 className={status === "failed" ? "failed-text" : ""}>
      {ip || "در حال دریافت "}
    </h4>
  );
}

export default UserIP;
