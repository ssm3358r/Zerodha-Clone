import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5 gap-3  mb-5">
        <h2>Charges</h2>
        <h5 className="text-muted">List of all charges and taxes</h5>
      </div>
      <div className="row">
        <div className="col text-center p-5">
          <img src="\media\images\pricing0.svg" alt="HeroImage" className="" />
          <h2 className="my-4">Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE),
            <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col text-center p-5">
          <img src="media\images\intradayTrades.svg" alt="HeroImage" className="" />
          <h2 className="my-4">Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per
            <br />
            executed order on intraday trades across
            <br />
            equity, currency, and commodity trades. Flat
            <br />
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center p-5">
          <img src="\media\images\pricing0.svg" alt="HeroImage" className="" />
          <h2 className="my-4">Free direct MF</h2>
          <p>
            All direct mutual fund investments are
            <br />
            absolutely free — ₹ 0 commissions & DP<br/>
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
