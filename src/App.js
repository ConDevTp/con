import { useState, useEffect } from "react";
import "./App.css";

import ServerProgressBar from "./components/ProgressBar/ServerProgressBar";
import AnimatedCircularProgressbar from "./components/ProgressBar/CircularProgressbar";
import Cards from "./components/Card/Cards";
import TryButton from "./components/Buttono/TryButton";

function App() {
  const [percentage, setPercentage] = useState(0);
  const [status, setStatus] = useState("loading");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let progressInterval;
    if (status === "loading") {
      progressInterval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            const nextStatus = Math.random() > 0.5 ? "connected" : "failed";
            setStatus(nextStatus);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }

    return () => clearInterval(progressInterval);
  }, [status]);

  const handleRetry = () => {
    setStatus("loading");
    setPercentage(0);
  };

  return (
    <main className="main-container py-5 py-lg-0">
      <section className={`square  ${status}`}>
      <div className="square-border" ></div>
        {status === "loading" && (
          <>
          
         <h1>{new Intl.NumberFormat("fa-IR").format(percentage) + "٪"}</h1>
            <div style={{ width: 53, height: 53 }}>
              <AnimatedCircularProgressbar value={percentage} />
            </div>
          </>
        )}

        {status === "failed" && windowWidth < 992 && (
          <TryButton status={status} onClick={handleRetry} />
        )}
      </section>

      <ServerProgressBar status={status} progress={percentage} />

      <section className="mt-4 d-flex justify-content-center align-items-center">
        {status === "failed" && windowWidth >= 992 && (
          <TryButton status={status} onClick={handleRetry} />
        )}
        <h2 className="text-result">
          {status === "loading" && "در حال انتخاب سریع ترین سرور"}
          {status === "connected" && "اینترنت شما به سرور های ققنوس متصل شد"}
          {status === "failed" && "لطفا فیلترشکن خود را خاموش کنید"}
        </h2>
      </section>

      <Cards status={status} percentage={percentage} />
    </main>
  );
}

export default App;
