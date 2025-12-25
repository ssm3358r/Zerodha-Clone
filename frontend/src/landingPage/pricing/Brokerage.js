import React, { useState } from "react";

const commodityTable = [
  [
    "Brokerage",
    "0.03% or Rs. 20/executed order whichever is lower",
    "₹ 20/executed order",
  ],
  ["STT/CTT", "0.01% on sell side (Non-Agri)", "0.05% on sell side"],
  [
    "Transaction charges",
    "MCX: 0.0021%\nNSE: 0.0001%",
    "MCX: 0.0418%\nNSE: 0.001%",
  ],
  [
    "GST",
    "18% on (brokerage + SEBI charges + transaction charges)",
    "18% on (brokerage + SEBI charges + transaction charges)",
  ],
  [
    "SEBI charges",
    "Agri: \n₹1 / crore\nNon-agri: \n₹10 / crore",
    "₹10 / crore",
  ],
  [
    "Stamp charges",
    "0.002% or ₹200 / crore on buy side",
    "0.003% or ₹300 / crore on buy side",
  ],
];

function Brokerage() {
  const [tab, setTab] = useState("equity");

  return (
    <section className="container my-4">
      <h2 className="mb-3">Brokerage</h2>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "equity" ? "active" : ""}`}
            onClick={() => setTab("equity")}
          >
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "currency" ? "active" : ""}`}
            onClick={() => setTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "commodity" ? "active" : ""}`}
            onClick={() => setTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      <div>
        {tab === "equity" && (
          <div>
            <div className="card">
              <div className="card-body p-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: "20%" }}></th>
                      <th>Equity delivery</th>
                      <th>Equity intraday</th>
                      <th>F&O - Futures</th>
                      <th>F&O - Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Brokerage</td>
                      <td>Zero Brokerage</td>
                      <td>0.03% or Rs. 20/executed order whichever is lower</td>
                      <td>0.03% or Rs. 20/executed order whichever is lower</td>
                      <td>Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr>
                      <td>STT/CTT</td>
                      <td>0.1% on buy &amp; sell</td>
                      <td>0.025% on the sell side</td>
                      <td>0.02% on the sell side</td>
                      <td>
                        <ul className="mb-0">
                          <li>
                            0.125% of the intrinsic value on options that are
                            bought and exercised
                          </li>
                          <li>0.1% on sell side (on premium)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Transaction charges</td>
                      <td>
                        NSE: 0.00297%
                        <br />
                        BSE: 0.00375%
                      </td>
                      <td>
                        NSE: 0.00297%
                        <br />
                        BSE: 0.00375%
                      </td>
                      <td>
                        NSE: 0.00173%
                        <br />
                        BSE: 0
                      </td>
                      <td>
                        NSE: 0.03503% (on premium)
                        <br />
                        BSE: 0.0325% (on premium)
                      </td>
                    </tr>
                    <tr>
                      <td>GST</td>
                      <td colSpan={4}>
                        18% on (brokerage + SEBI charges + transaction charges)
                      </td>
                    </tr>
                    <tr>
                      <td>SEBI charges</td>
                      <td>₹10 / crore</td>
                      <td>₹10 / crore</td>
                      <td>₹10 / crore</td>
                      <td>₹10 / crore</td>
                    </tr>
                    <tr>
                      <td>Stamp charges</td>
                      <td>0.015% or ₹1500 / crore on buy side</td>
                      <td>0.003% or ₹300 / crore on buy side</td>
                      <td>0.002% or ₹200 / crore on buy side</td>
                      <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {tab === "currency" && (
          <div>
            <div className="card">
              <div className="card-body p-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: "25%" }}></th>
                      <th>Currency futures</th>
                      <th>Currency options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Brokerage</td>
                      <td>0.03% or ₹ 20/executed order whichever is lower</td>
                      <td>₹ 20/executed order</td>
                    </tr>
                    <tr>
                      <td>STT/CTT</td>
                      <td>No STT</td>
                      <td>No STT</td>
                    </tr>
                    <tr>
                      <td>Transaction charges</td>
                      <td>
                        NSE: 0.00035%
                        <br />
                        BSE: 0.00045%
                      </td>
                      <td>
                        NSE: 0.0311%
                        <br />
                        BSE: 0.001%
                      </td>
                    </tr>
                    <tr>
                      <td>GST</td>
                      <td colSpan={2}>
                        18% on (brokerage + SEBI charges + transaction charges)
                      </td>
                    </tr>
                    <tr>
                      <td>SEBI charges</td>
                      <td colSpan={2}>₹10 / crore</td>
                    </tr>
                    <tr>
                      <td>Stamp charges</td>
                      <td>0.0001% or ₹10 / crore on buy side</td>
                      <td>0.0001% or ₹10 / crore on buy side</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {tab === "commodity" && (
          <div>
            <div className="card">
              <div className="card-body p-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: "25%" }}></th>
                      <th>Commodity futures</th>
                      <th>Commodity options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commodityTable.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td style={{ whiteSpace: "pre-line" }}>{row[1]}</td>
                        <td style={{ whiteSpace: "pre-line" }}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="text-center my-5 fs-5 text-muted">
        {" "}
        <a href="#">Calculate your costs upfront</a> using our brokerage calculator
      </p>
    </section>
  );
}

export default Brokerage;
