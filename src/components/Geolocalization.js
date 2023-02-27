import { AiOutlineRight } from "react-icons/ai";
import geo from "../assets/geo-img.png";

function Geolocalization() {
  return (
    <div className="geo">
      <div className="section">
        <div className="right">
          <h5 className="section-title">GEOLOCALIZATION</h5>
          <h1 className="section-title-big">Host Your Data Locally</h1>
          <p className="section-paragraph">
            With Jotform Enterprise, you can use geolocalization to host your
            account almost anywhere in the world using{" "}
            <strong>Amazon Web Services (AWS), Google Cloud</strong> and{" "}
            <strong>Microsoft Azure</strong>. This helps meet data privacy
            requirements in countries such as: Australia, Canada, the U.K., the
            EU, and more.
          </p>
          <div className="arrow-link">
            <p>Learn more about Security</p>
            <AiOutlineRight className="apps-link-icon" />
          </div>
        </div>
        <div className="left">
          <img src={geo} alt="geolocalization logo" className="image-90" />
        </div>
      </div>
    </div>
  );
}

export default Geolocalization;
