import { useState } from "react";
import {
  ShieldCheck,
  Link2,
  Mail,
  Search,
  Activity,
} from "lucide-react";

export default function App() {
  const [text, setText] = useState("");
  const [type, setType] = useState("message");

  function scan(e) {
    e.preventDefault();

    if (text.trim() === "") {
      alert("Please enter a message or URL.");
    } else {
      alert("Scam analysis is in progress. Please wait...");
    }
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="logo">
            <ShieldCheck size={25} />
          </span>
          <div>
            <b>
              PhishGuard <em>AI</em>
            </b>
            <small>INTELLIGENT FRAUD PROTECTION</small>
          </div>
        </div>

        <span className="status">
          <i /> Demo Mode
        </span>
      </header>

      <section className="hero">
        <div className="eyebrow">
          <Activity size={15} /> THREAT DETECTION
        </div>

        <h1>
          Stay one step ahead
          <br />
          <span>of digital fraud.</span>
        </h1>

        <p>Check suspicious messages and URLs for potential scams.</p>
      </section>

      <section className="layout">
        <form className="panel scan-panel" onSubmit={scan}>
          <div className="panel-title">
            <div>
              <span className="mini-icon">
                <Search size={18} />
              </span>
              <div>
                <h2>Threat Scanner</h2>
                <p>Enter a message or website URL.</p>
              </div>
            </div>
            <span className="live">DEMO</span>
          </div>

          <div className="tabs">
            <button
              type="button"
              className={type === "message" ? "active" : ""}
              onClick={() => setType("message")}
            >
              <Mail size={16} /> Message
            </button>

            <button
              type="button"
              className={type === "url" ? "active" : ""}
              onClick={() => setType("url")}
            >
              <Link2 size={16} /> URL
            </button>
          </div>

          <label>
            {type === "url" ? "Enter website URL" : "Enter suspicious message"}
          </label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={
              type === "url"
                ? "https://example.com"
                : "Your bank account is blocked. Click here..."
            }
            rows={7}
          />

          <div className="form-footer">
            <span>{text.length} characters</span>

            <button className="scan-btn" type="submit">
              <Search size={17} />
              Analyse Threat
            </button>
          </div>
        </form>

        <section className="panel result-panel">
          <div className="panel-title">
            <div>
              <span className="mini-icon">
                <ShieldCheck size={18} />
              </span>
              <div>
                <h2>Analysis Result</h2>
                <p>Scan status</p>
              </div>
            </div>
          </div>

          <div className="empty">
            <div className="empty-icon">
              <ShieldCheck size={35} />
            </div>

            <h3>Ready to Analyse</h3>

            <p>
              Enter suspicious content and click Analyse Threat to start.
            </p>
          </div>
        </section>
      </section>

      <section className="bottom-note">
        <ShieldCheck size={18} />
        <div>
          <b>PhishGuard AI</b>
          <p>
            This is a simple demonstration project for phishing and digital
            fraud awareness.
          </p>
        </div>
      </section>

      <footer>
        <span>•</span> PHISHGUARD AI <span>•</span>
      </footer>
    </main>
  );
}
