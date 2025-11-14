import React from "react";
import "./Websites.css";
import { websites } from "../../assets/variables";
import { handleClick } from "../../utils/handleClick";

const Websites = () => {
  return (
    <div className="website-container">
      <h1>Websites</h1>
      <div className="website-content">
        {websites.map((site, i) => (
          <div
            className="website-card"
            key={i}
            style={{ backgroundColor: site.bg }}
            // onClick={() => console.log("clicked", site.link)}
            onClick={handleClick(site.link)}
          >
            <img src={site.img} alt={site.title} />
            <div className="website-card-content">{site.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Websites;
