import React from "react";

function Universe() {
  return (
    <div className="container text-center p-5">
      <p className="fs-5 mb-4 p-5 text-muted">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <h4 className="">The Zerodha Universe</h4>
      <p className="text-muted mt-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row text-center mb-5">
        <div className="col text-muted p-5">
          <img
            style={{ width: "60%" }}
            src="media\images\zerodhaFundhouse (1).png"
            alt=""
          />
          <p className="p-2 mt-3" style={{ fontSize: "13px" }}>
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col text-muted p-5">
          <img
            style={{ width: "80%" }}
            src="media\images\sensibullLogo.svg"
            alt=""
          />
          <p className="p-2 mt-3 " style={{ fontSize: "13px" }}>
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col text-muted p-5">
          <img
            style={{ width: "60%" }}
            src="media\images\(1).png"
            alt=""
          />
          <p className="p-2 mt-3" style={{ fontSize: "13px" }}>
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center mb-5">
        <div className="col text-muted ">
          <img
            style={{ width: "50%" }}
            src="media\images\streakLogo.png"
            alt=""
          />
          <p className="p-2 mt-3" style={{ fontSize: "13px" }}>
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className="col text-muted">
          <img
            style={{ width: "50%" }}
            src="media\images\smallcaseLogo.png"
            alt=""
          />
          <p className="p-2 mt-3 " style={{ fontSize: "13px" }}>
           Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
           baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col text-muted ">
          <img
            style={{ width: "40%" }}
            src="media\images\dittoLogo.png"
            alt=""
          />
          <p className="p-2 mt-3" style={{ fontSize: "13px" }}>
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
           and no mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
