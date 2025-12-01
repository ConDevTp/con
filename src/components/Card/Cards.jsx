import { FaAngleLeft } from "react-icons/fa6";
import "./cards.css";
import UserIP from "./UserIP";
import map from "../../assets/map.svg";

const Cards = ({ status }) => {
  return (
    <section className="mt-4 pt-2 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center w-100">
      <div className="box box-map d-flex justify-content-center align-items-center">
        <img
          src={map}
          className="img-fluid rounded-top"
          alt="Map"
          loading="lazy"
        />
        <span className="map-dot dot-1"></span>
        <span className="map-dot dot-2"></span>
        <span className="map-dot dot-3"></span>
        <span className="map-dot dot-4"></span>
        <span className="map-dot dot-5"></span>
      </div>

      <div className="box d-flex justify-content-center align-items-start flex-column position-relative">
        <div className="d-flex justify-content-center align-items-center flex-column con-text-ip">
          <h3>آیپی دستگاه شما</h3>
          <div className="d-flex justify-content-center align-content-center con-ip-text">
            <img
              src={
                status === "failed"
                  ? require("../../assets/location-red.png")
                  : require("../../assets/location-green.png")
              }
              className="img-fluid rounded-top"
              alt="Location"
              loading="lazy"
            />
            <UserIP status={status} />
          </div>
          <h5
            className={
              status === "loading"
                ? "loading-circle"
                : status === "connected"
                ? "connected-circle"
                : "failed-circle"
            }
          >
            {status === "loading" && "Loading..."}
            {status === "connected" && "۲۴۰ ms"}
            {status === "failed" && "۲۷۰ ms"}
          </h5>
        </div>

        <div className="con-games">
          <img
            src={require("../../assets/game1.png")}
            className="img-fluid"
            alt="Game-1"
            loading="lazy"
          />
          <img
            src={require("../../assets/game2.png")}
            className="img-fluid"
            alt="Game-2"
            loading="lazy"
          />
          <img
            src={require("../../assets/gmae3.png")}
            className="img-fluid"
            alt="Game-3"
            loading="lazy"
          />
          <button className="game-button d-flex justify-content-center align-items-center">
            <span>
              <FaAngleLeft />
            </span>
            لیست بازی ها
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
