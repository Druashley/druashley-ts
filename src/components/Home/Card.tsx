import React from "react";
import { BubbleChart } from "reaviz";
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
        <div>
          <StyledButton>
            <a href={project.url} target="_blank" rel="noreferrer">
              Demo
            </a>
          </StyledButton>
          <StyledButton>
            <a href={project.github} target="_blank" rel="noreferrer">
              Github
            </a>
          </StyledButton>
        </div>
        <p>{project.description}</p>
      </div>
      <div>
        <h3>Highlighted Tech</h3>
        <BubbleChart height={400} width={400} data={project.technologies} />
      </div>
    </StyledCard>
  );
};

export default Card;
