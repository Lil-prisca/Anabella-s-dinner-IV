import React from "react";
import "../style/envel.css";
import pics from "../assets/IMG-20251130-WA0005.jpg";

const Enp = () => {
  return (
    <div className="envelope">
      <div className="envelope-cover"></div>

      <div className="letter">
        <div className="invite-card">
          <p className="top-text">
            YOU’RE INVITED TO TOAST <br />
            ANNABELLE’S GRADUATION DINNER THE CLASS OF 2025
          </p>

          <div className="image-frame">
            <img src={pics} alt="Graduate Photo" />
          </div>

          <h1 className="main-title">
            She ea<span className="gold">(rn)</span>ed it!
          </h1>

          <p className="date-text">WEDNESDAY 28TH JANUARY 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Enp;
