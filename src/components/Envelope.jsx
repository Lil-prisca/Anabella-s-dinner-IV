import React from "react";
import "../style/grad.css";
import vid from "../assets/VID-20251130-WA0007.mp4";

const Envelope = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Annabelle's Graduation Dinner</h1>
        <div className="button-row">
          <button className="btn">Will Attend</button>
          <button className="btn outline">Will Not Attend</button>
        </div>
        <div className="section">
          <p className="label">Hosted By</p>
          <p className="value">Annabelle</p>
        </div>
        <div className="section description">
          <p>
            <strong>GRADUATION DINNER 🎉💐</strong>
            <br></br>
            Get ready for a fun evening with friends and family. <br></br>
            Join us on <strong>
              Wednesday, 28 January 2026 at 16:00
            </strong>. <br />
            Location to be confirmed by the host.
            <br></br>
            Please RSVP by <strong>Wednesday 14 January 2026</strong> so we can
            get a headcount.
          </p>
        </div>
        <div className="section">
          <p className="label">
            {" "}
            <strong>Date</strong>
          </p>
          <p className="value">Wednesday, 28 January 2026</p>
          <p className="value underline">16:00PM WAT</p>
        </div>
        <h3 className="video-label"> Video </h3>
        <h3 className="video-label"> GREATFUL TO GOD </h3>
        <div className="video-wrapper">
          <video controls crossOrigin="anonymous">
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Envelope;
