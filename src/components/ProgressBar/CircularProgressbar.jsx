import { useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const AnimatedCircularProgressbar = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const prevValueRef = useRef(0);

  useEffect(() => {
    const start = prevValueRef.current;
    const end = value;
    const duration = 300;
    const stepTime = 20;
    const increment = (end - start) / (duration / stepTime);
    let current = start;

    const interval = setInterval(() => {
      current += increment;
      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        current = end;
        clearInterval(interval);
      }
      setDisplayValue(Math.round(current));
    }, stepTime);

    prevValueRef.current = end;
    return () => clearInterval(interval);
  }, [value]);

  return (
    <CircularProgressbar
      value={value}
      strokeWidth={15}
      styles={buildStyles({
        pathColor: "#9B80D1",
        trailColor: "#3F0BA5",
        strokeLinecap: "round",
      })}
    />
  );
};

export default AnimatedCircularProgressbar;
