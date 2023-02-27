import apps from "../assets/apps.png";

import { AiOutlineRight } from "react-icons/ai";

function Apps() {
  return (
    <div className="apps">
      <div className="right">
        <h5 className="section-title">APPS AND INTEGRATIONS</h5>
        <h1>Built for Your Workflow</h1>
        <div className="apps-heading">
          <h3>Connect your tools to Jotform Enterprise</h3>
          <p>
            With more than 400 special apps and integrations, Jotform Enterprise
            can easily integrate directly into your daily workflow.
          </p>
        </div>
        <div className="apps-heading">
          <h3>Build Custom Apps with our API</h3>
          <p>
            If you have unique workflow requirements, our API allows you to
            build custom apps that meet your business needs.
          </p>
        </div>
        <div className="arrow-link">
          <p>Learn more about API</p>
          <AiOutlineRight className="apps-link-icon" />
        </div>
      </div>

      <div className="left">
        <img src={apps} className="apps-image" alt="Apps Logo" />
      </div>
    </div>
  );
}

export default Apps;
