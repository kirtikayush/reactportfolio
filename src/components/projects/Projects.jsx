import React from "react";
import "./Projects.css";
import Foodigo from "../../assets/images/foodigo.png";
import Todo from "../../assets/images/todo.png";
import Weather from "../../assets/images/weather.png";

const Projects = () => {
  const projects = [
    {
      title: "Captain",
      subtitle: "Enhancing pick-up accuracy for riders",
      description:
        "A case study where I improved pick-up accuracy in the driver app by using image and street view, which helped reduce order cancellations.",
      tags: ["UX Design", "Driver App", "Mobility"],
      image: Foodigo,
      bgColor: "#F9C913",
      buttonText: "View Case Study",
    },
    {
      title: "Stock Predictor",
      subtitle: "Forecasting future prices with LSTM",
      description:
        "An AI-powered web app that predicts stock trends using deep learning and time series forecasting.",
      tags: ["AI", "Finance", "React"],
      image: Todo,
      bgColor: "#8f5bffff",
      buttonText: "Explore Project",
    },
    {
      title: "Traffic Analyzer",
      subtitle: "Real-time congestion visualization",
      description:
        "Built a dashboard using the TomTom API for live traffic insights and congestion heatmaps.",
      tags: ["React", "API", "Data Visualization"],
      image: Weather,
      bgColor: "#279b59ff",
      buttonText: "See Details",
    },
  ];
  return (
    <div className="projects-container">
      <h1>Recent Works</h1>

      {projects.map((project, i) => (
        <div
          key={i}
          className={`project-card ${i % 2 !== 0 ? "reverse" : ""}`}
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-content">
            <div className="project-content-top">
              <h2>{project.title}</h2>
              <ul>
                {project.tags.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
              <p>{project.description}</p>
            </div>

            <button>{project.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
