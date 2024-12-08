import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Alert from "./components/Alert";
import Message from "./Message";
import Listgroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">My App</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/alerts">Alerts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/message">Message</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/listgroup">Listgroup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/button">Button</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to My App</h1>} />
          <Route path="/alerts" element={<Alert />} />
          <Route path="/message" element={<Message />} />
          <Route path="/listgroup" element={<Listgroup />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
