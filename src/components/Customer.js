import customer from "../assets/customer-img.png";

function Customer() {
  return (
    <div className="section section-blue">
      <div className="left">
      <h5 className="section-title">PRIORITY CUSTOMER SUPPORT</h5>
      <h1 className="section-title-big">
        Dedicated Support Team to Provide Assistance
      </h1>
      <p className="section-paragraph">
        Move to the head of the line and get fast customer support. Our
        Enterprise Support Team is available during standard business hours to
        answer any questions you may have.
      </p>
      </div>
      <div className="right">
      <img src={customer} alt="" className="customer-img" />
      </div>
    </div>
  );
}
export default Customer;
