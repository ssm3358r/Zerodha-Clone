import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-4 ">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            we pioneeered the concept of discount broking and price transparency
            in India.Flat fees and no hidden charges.
          </p>
          <Link className="mx-5 fs-5" style={{ textDecoration: "none" }} to="/pricing">
            See pricing
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="border p-3 col-6 text-center">
              <h1>
                <i className="fa fs-2 fa-inr" aria-hidden="true"></i>0
              </h1>
              <p>
                Free equity deleivery and <br />
                direct funds
              </p>
            </div>
            <div className="border p-3 col-6 text-center">
              <h1>
                <i className="fa fs-2 fa-inr" aria-hidden="true"></i>20
              </h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
