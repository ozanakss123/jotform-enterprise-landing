import exist from "../assets/existing-img.png";

function Existing() {
  return (
    <div className="existing">
      <div className="section">
        <div className="left">
          <h5 className="section-title">EASY TO MIGRATE YOUR CURRENT FORMS</h5>
          <h1 className="section-title-big">Import Existing Forms</h1>
          <p className="section-paragraph">
            There's no need to rebuild your forms. Our migration tool can import
            your current forms from legacy environments to ensure a smooth
            transition.
          </p>
        </div>
        <div className="right">
          <img src={exist} alt="existing logo" className="image-95" />
        </div>
      </div>
    </div>
  );
}

export default Existing;
