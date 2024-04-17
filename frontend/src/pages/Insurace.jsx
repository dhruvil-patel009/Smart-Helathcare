import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { insurance } from "../assets/data/insurace"; // corrected import path

function InsurancePage() {
  return (
    <div
      style={{
        margin: `50px`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
      }}
    >
      {insurance.map((company) => (
        <Link
          key={company.id}
          to={company.link}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <div
            className="e-card e-card-horizontal"
            style={{ width: `400px`, margin: `10px` }}
          >
            <img
              src={company.photo}
              alt={company.name}
              style={{ width: `100%`, height: "auto" }}
            />
            <div className="e-card-stacked">
              <div className="e-card-header">
                <div className="e-card-header-caption">
                  <div className="e-card-header-title">{company.name}</div>
                </div>
              </div>
              <div className="e-card-content">
                {/* You can add more properties of the insurance company here if needed */}
                {/* For example: {company.description} */}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default InsurancePage;
