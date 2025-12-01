import "./trybutton.css";

const TryButton = ({ status, ...props }) => {
  return (
    <button
      {...props}
      className={`btn-tryAgain  justify-content-center align-items-center ${
        status === "failed" ? "d-flex" : "d-none"
      } `}
    >
      <img
        src={require("../../assets/tyrAgainBtn.png")}
        class="img-fluid rounded-top "
        alt=""
        loading="lazy"
      />
      <p>ثبت مجدد آیپی</p>
    </button>
  );
};

export default TryButton;
