import React, { useState } from "react";
import { Link } from 'react-router-dom';
const sectionsData = [
  {
    title: "Account Opening",
    items: [
      "Resident individual",
      "Non Resident Indian (NRI)",
      "Minor",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
    icon:"fa fa-plus"
  },
  {
    title: "Your Zerodha Account",
    items: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
    icon:"fa fa-user-circle"
  },
  { title: "Kite", items: ["Kite intro", "Kite features", "Kite settings"],icon:"fa fa-adjust" },
  { title: "Funds", items: ["Adding funds", "Withdrawals", "Limits"],icon:"fa fa-inr" },
  { title: "Console", items: ["Console intro", "Reports", "Billing"] ,icon:"fa fa-at"},
];

function AccordionItem({ section, isOpen, onToggle }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "14px 18px",
          background: "#fff",
          border: "1px solid #e6e6e6",
          borderRadius: 4,
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            border: "1px solid #e6eef8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
            color: "#2b6fb3",
            background: "#f7fbff",
          }}
        >
          <i className={section.icon}></i>
        </div>
        
        <div style={{ flex: 1, textAlign: "left" }}>{section.title}</div>
        <div style={{ color: "#2b6fb3" }}>{isOpen ? "\u25B2" : "\u25BC"}</div>
      </button>

      {isOpen && (
        <div
          style={{
            border: "1px solid #eee",
            borderTop: "none",
            padding: 20,
            background: "#fff",
          }}
        >
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {section.items.map((it, idx) => (
              <li key={idx} style={{ margin: "10px 0" }}>
                <Link to="#" style={{ color: "#2b6fb3", textDecoration: "none" }}>
                  {it}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="p-5 mx-5" style={{ padding: "28px 40px" }}>
      

      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          {sectionsData.map((s, i) => (
            <AccordionItem
            
              section={s}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <aside style={{ width: 300 }}>
          <div
            style={{
              background: "#fff3e6",
              borderLeft: "6px solid #f39c12",
              padding: 16,
              marginBottom: 16,
              borderRadius: 2,
            }}
          >
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li style={{ margin: "8px 0" }}>
                <Link to="#" style={{ color: "#1a73e8" }}>
                  Latest Intraday leverages and Square-off timings
                </Link>
              </li>
              <li style={{ margin: "8px 0" }}>
                <Link to="#" style={{ color: "#1a73e8" }}>
                  Offer for sale (OFS) – December 2025
                </Link>
              </li>
            </ul>
          </div>

          <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 2 }}>
            <div style={{ padding: 12, borderBottom: "1px solid #f2f2f2", fontWeight: 600 }}>Quick links</div>
            <ol style={{ margin: 0, padding: 12, listStylePosition: "inside" }}>
              <li style={{ margin: "8px 0" }}>
                <Link to="#" style={{ color: "#2b6fb3" }}>
                  Track account opening
                </Link>
              </li>
              <li style={{ margin: "8px 0" }}>
                <Link to="#" style={{ color: "#2b6fb3" }}>
                  Track segment activation
                </Link>
              </li>
              <li style={{ margin: "8px 0" }}>
                <Link to="#" style={{ color: "#2b6fb3" }}>
                  Intraday margins
                </Link>
              </li>
              <li style={{ margin: "8px 0" }}>
                <Link to="#" style={{ color: "#2b6fb3" }}>
                  Kite user manual
                </Link>
              </li>
              <li style={{ margin: "8px 0" }}>
                <Link to="#" style={{ color: "#2b6fb3" }}>
                  Learn how to create a ticket
                </Link>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Questions;
