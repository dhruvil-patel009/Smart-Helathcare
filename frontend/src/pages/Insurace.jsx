import React from "react";
import { Link } from "react-router-dom";
import { insurance } from "../assets/data/insurace"; // Corrected import path
import "./css/insurance.css";
function InsurancePage() {
  return (
    <div className="articles">
      {insurance.map((company) => (
        <article key={company.id}>
          <div className="article-wrapper">
            <figure>
              <img src={company.photo} alt={company.name} />
            </figure>
            <div className="article-body">
              <h2>{company.name}</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <Link to={company.link} className="read-more">
                Read more <span className="sr-only">about {company.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default InsurancePage;
