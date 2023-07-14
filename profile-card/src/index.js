import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="myAvatar.jpeg" alt="Bradley Murrell" />;
}

function Intro() {
  return (
    <div>
      <h1>Bradley Murrell</h1>
      <p>
        Junior Full Stack Developer with a diverse life and technical
        experience. I look forward to building a career as a developer.
      </p>
    </div>
  );
}

function SkillList() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
