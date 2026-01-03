import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="container  bg-light">
      
        <div className="row p-5 ">
          <div className="col px-5">
            <img
              className=" mb-3"
              src="media\images\logo.svg"
              style={{ width: "80%" }}
              alt="zerodhaLogo"
            />
            <p className=" text-muted " style={{ fontSize: "13px" }}>
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="border-bottom row py-4   mb-3">
              <i
                class="fa fa-twitter fs-5 text-muted col"
                aria-hidden="true"
              ></i>
              <i
                class="fa fa-facebook-square fs-5 text-muted col"
                aria-hidden="true"
              ></i>
              <i
                class="fa fa-instagram fs-5 text-muted col"
                aria-hidden="true"
              ></i>
              <i
                class="fa fa-linkedin-square fs-5 text-muted col"
                aria-hidden="true"
              ></i>
            </div>

            <div className="px-2">
              <i
                class="fa fa-youtube-play fs-5 text-muted "
                aria-hidden="true"
              ></i>
              <i
                class="fa fa-whatsapp mx-5 fs-5 text-muted"
                aria-hidden="true"
              ></i>
              <i class="fa fa-telegram fs-5 text-muted " aria-hidden="true"></i>
            </div>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <h1 className="nav-head ">Account</h1>
              <li>
                <Link to="#">Open demat account</Link>
              </li>
              <br />
              <li>
                <Link to="#">Minor demat account</Link>
              </li>
              <br />
              <li>
                <Link to="#">NRI demat account</Link>
              </li>
              <br />
              <li>
                <Link to="#">Commodity</Link>
              </li>
              <br />
              <li>
                <Link to="#">Dematerialisation</Link>
              </li>
              <br />
              <li>
                <Link to="#">Fund transfer</Link>
              </li>
              <br />
              <li>
                <Link to="#">MTF</Link>
              </li>
              <br />
              <li>
                <Link to="#">Referral program</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <h1 className="nav-head">Support</h1>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <br />
              <li>
                <Link to="#">Support portal</Link>
              </li>
              <br />
              <li>
                <Link to="#">How to file a complaint?</Link>
              </li>
              <br />
              <li>
                <Link to="#">Status of your complaints</Link>
              </li>
              <br />
              <li>
                <Link to="#">Bulletin</Link>
              </li>
              <br />
              <li>
                <Link to="#">Circular</Link>
              </li>
              <br />
              <li>
                <Link to="#">Z-Connect blog</Link>
              </li>
              <br />
              <li>
                <Link to="#">Downloads</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled">
              <h1 className="nav-head">Company</h1>
              <li>
                <Link to="#">About</Link>
              </li>
              <br />
              <li>
                <Link to="#">Philosophy</Link>
              </li>
              <br />
              <li>
                <Link to="#">Press & media</Link>
              </li>
              <br />
              <li>
                <Link to="#">Careers</Link>
              </li>
              <br />
              <li>
                <Link to="#">Zerodha Cares (CSR)</Link>
              </li>
              <br />
              <li>
                <Link to="#">Zerodha.tech</Link>
              </li>
              <br />
              <li>
                <Link to="#">Open source</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled">
              <h1 className="nav-head">Quick links</h1>
              <li>
                <Link to="#">Upcoming IPOs</Link>
              </li>
              <br />
              <li>
                <Link to="#">Brokerage charges</Link>
              </li>
              <br />
              <li>
                <Link to="#">Market holidays</Link>
              </li>
              <br />
              <li>
                <Link to="#">Economic calendar</Link>
              </li>
              <br />
              <li>
                <Link to="#">Calculators</Link>
              </li>
              <br />
              <li>
                <Link to="#">Markets</Link>
              </li>
              <br />
              <li>
                <Link to="#">Sectors</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row p-5  text-muted" style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div
          className="d-flex justify-content-around py-3 border-top"
          style={{ fontSize: "13px" }}
        >
          <span className="text-muted">NSE</span>
          <span className="text-muted">BSE</span>
          <span className="text-muted">MCX</span>
          <span className="text-muted">Terms & conditions </span>
          <span className="text-muted">Policies & procedures </span>
          <span className="text-muted">Privacy policy</span>
          <span className="text-muted">Disclosure </span>
          <span className="text-muted">For investor's attention </span>
          <span className="text-muted">Investor charter</span>
        </div>
      
    </footer>
  );
}

export default Footer;
