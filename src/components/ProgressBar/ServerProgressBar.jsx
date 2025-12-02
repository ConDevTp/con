import "./serverProgressBar.css";

const ServerProgressBar = ({ status = "loading", progress = 50, animate = true }) => {
  return (
    <section className="progress-bar">
      <div
        className="progress"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`progress-bar ${status}`}
          style={{
            width: `${progress}%`,
            transition: animate ? "width 0.5s ease" : "none",
          }}
        ></div>
      </div>
    </section>
  );
};

export default ServerProgressBar;
