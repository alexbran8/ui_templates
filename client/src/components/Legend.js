import React from "react";

const Legend = () => {
  return (
    <div className="row text-white text-center mt-3 legend">
      <div className="col-12 row">
        <div className="box col p-4" style={{ backgroundColor: "#5DB5F4" }}>
          Training
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#F5B041" }}>
          Vacation
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#73C6B6" }}>
          On Call
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#E74C3C" }}>
          Hotline
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#3498DB" }}>
          Day Off (due to work)
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#8E44AD" }}>
          Special Events
        </div>
      </div>
      <div className="col-12 row">
        <div className="box col p-4" style={{ backgroundColor: "#2ECC71" }}>
          Forecast EH
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#1D8348" }}>
          Forecast NH
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#F7DC6F" }}>
          EH Day Off
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#85C1E9" }}>
          Morning Tasks
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#707B7C" }}>
          Night Tasks
        </div>
        <div className="box col p-4" style={{ backgroundColor: "#FF0000" }}>
          Blood donation
        </div>
      </div>
      <div className="col-12 row">
        <div
          className="box box-bottom col p-4"
          style={{ backgroundColor: "#21618C" }}
        >
          Day Off (Recovery)
        </div>
        <div
          className="box box-bottom col p-4"
          style={{ backgroundColor: "#D2B4DE" }}
        >
          8th March
        </div>
        <div
          className="box box-bottom col p-4"
          style={{ backgroundColor: "#F0B27A" }}
        >
          Business Trip
        </div>
        <div
          className="box box-bottom col p-4"
          style={{ backgroundColor: "#154360" }}
        >
          Working on DayOff
        </div>
        <div
          className="box box-bottom col p-4"
          style={{ backgroundColor: "#E6B0AA" }}
        >
          Medical Leave
        </div>
        <div
          className="box box-bottom col p-4"
          style={{ backgroundColor: "#17202A" }}
        >
          Unpaid
        </div>
      </div>
    </div>
  );
};

export default Legend;
