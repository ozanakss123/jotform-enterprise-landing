import prod from "../assets/prod-img.png";

function Productivity() {
  return (
    <div className="prod">
      <div className="section">
        <div className="right">
          <h5 className="section-title">GET STARTED TODAY</h5>
          <h1 className="section-title-big">
            Ready to increase your company productivity?
          </h1>
          <p className="section-paragraph">
            Contact Jotform to find out how we can help increase your efficiency
            and transform your business.
          </p>
          <a href="#" className="btn btn-prod">
            Get a Demo
          </a>
        </div>
        <div className="left">
          <img src={prod} alt="" className="image-95" />
        </div>
      </div>
    </div>
  );
}

export default Productivity;
