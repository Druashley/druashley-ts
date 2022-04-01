import React from "react";
import { StyledCard } from "../styles/Card.styled";
import { StyledButton } from "../styles/Button.styled";

import { IProject } from "../../Projects";

interface Props {
  project: IProject;
}

const Card: React.FC<Props> = ({ project }) => {
  return (
    <StyledCard layout={project.id % 2 === 0 ? "row-reverse" : "row"}>
      <div>
        <h2>{project.title}</h2>
        <div className="button-container">
          <a href={project.url} target="_blank" rel="noreferrer">
          <StyledButton>
              Demo
          </StyledButton>
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
          <StyledButton>
              Github
          </StyledButton>
          </a>
        </div>
        <p>{project.description}</p>
      </div>
      <div>
        <h3>Highlighted Tech</h3>
        <ul>
        {project.technologies.map((tech) => {
          return (
            <li key={tech.key}>
              {tech.key}
            </li>
          )
        })}
          </ul>
      </div>
    </StyledCard>
  );
};

export default Card;
