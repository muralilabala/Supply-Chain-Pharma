import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };
  return (
    <div className="container">
      <div className="header">
        <h3>Supply Chain Management for Pharma :- </h3>
      </div>
      <br />
      <div className="register">
        <h5>
          Step 1: <b>Register</b> your Supply Chain Roles here. (RMS, Manufacturer, etc.)
        </h5>
        <h6>(Note: This is a one time step. Skip to step 2 if already done)</h6>
        <button
          onClick={redirect_to_roles}
          className="btn btn-outline-primary btn-sm"
        >
          Register
        </button>
      </div>
      <br />
      <div className="ordermedicines">
        <h5>Step 2: <b>Order</b> your medicines here.</h5>
        <button
          onClick={redirect_to_addmed}
          className="btn btn-outline-primary btn-sm"
        >
          Order Medicines
        </button>
      </div>
      <br />
      <div className="controlchain">
        <h5>Step 3: <b>Control</b> Supply Chain</h5>
        <button
          onClick={redirect_to_supply}
          className="btn btn-outline-primary btn-sm"
        >
          Control Supply Chain
        </button>
      </div>
      <br />
      <div className="track">
        <h5>
          <b>Track</b> your medicines here using the unique medicine ID:
        </h5>
        <button
          onClick={redirect_to_track}
          className="btn btn-outline-primary btn-sm"
        >
          Track Medicines
        </button>
      </div>
    </div>
  );
}

export default Home;
