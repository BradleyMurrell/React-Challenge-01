import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "Html+CSS",
    level: "advanced",
    color: "#b6d7a8",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#ffe599",
  },
  {
    skill: "SASS",
    level: "advanced",
    color: "#ea9999",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#9fc5e8",
  },
];

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

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
