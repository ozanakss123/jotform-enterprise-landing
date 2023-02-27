import { AiOutlineRight } from "react-icons/ai";

import security from "../assets/security-img.png";

function Security() {
  return (
    <div className="security">
      <div className="section">
      <div className="right">
        <h5 className="section-title">SECURITY AND COMPLIANCE</h5>
        <h1 className="section-title-big">Your Data is Safe and Secure</h1>
        <p className="section-paragraph">
          Jotform Enterprise provides the highest industry standards to help
          protect your information. All form data is stored in dedicated
          databases, encrypted by <strong>256-bit SSL</strong>, and all payment
          transactions meet
          <strong> PCI DSS Level I</strong>. Depending on your needs, you can
          also request to be provisioned in a <strong>SOC 2 Type II-</strong>{" "}
          and <strong>HIPAA-</strong> certified environment. You also have the
          option of storing data within the EU.
        </p>
        <div className="arrow-link">
          <p>Learn more about Security</p>
          <AiOutlineRight className="apps-link-icon" />
        </div>
      </div>
      <div className="left">
        <img src={security} className="security-img" alt="security logo" />
      </div>
    </div>
    </div>
  );
}

export default Security;
