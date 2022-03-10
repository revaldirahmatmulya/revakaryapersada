import React from "react";
import Chart from "../assets/chart.svg";
import "./Team.css";

const Team = () => {
  return (
    <div>
      <div className="container-fluid team-content" id="team">
        <div className="row text-center">
          <div className="col-lg-12 col-sm-12">
            <h1 className="team-title">Team</h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-12 col-sm-12">
            <img src={Chart} alt="" className="org-chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
