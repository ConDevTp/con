import "./trybutton.css";

const TryButton = ({ status, ...props }) => {
  return (
    <button
      {...props}
      className={`btn-tryAgain  justify-content-center align-items-center ${
        status === "failed" ? "d-flex" : "d-none"
      } `}
    >
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.41669 4.08333H10.75V0.75"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.75002 9.41663H1.41669V12.75"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.75 6.74996C0.749543 5.57553 1.13675 4.43379 1.85153 3.50192C2.56631 2.57005 3.5687 1.90017 4.70312 1.59624C5.83754 1.29231 7.04057 1.37132 8.12549 1.82102C9.21042 2.27071 10.1166 3.06594 10.7033 4.0833"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.4167 6.75C11.4171 7.92443 11.0299 9.06618 10.3152 9.99804C9.60037 10.9299 8.59799 11.5998 7.46356 11.9037C6.32914 12.2077 5.12612 12.1286 4.04119 11.6789C2.95626 11.2292 2.05011 10.434 1.46335 9.41667"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p>ثبت مجدد آیپی</p>
    </button>
  );
};

export default TryButton;
