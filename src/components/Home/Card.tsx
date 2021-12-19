import React from "react";
import { BubbleChart } from "reaviz";
import { StyledCard } from "../styles/Card.styled";

import { IProject } from "../../Projects";

interface Props {
  project: IProject;
}

const Card: React.FC<Props> = ({ project }: Props) => {
  return (
    <StyledCard layout={project.id % 2 === 0 ? "row-reverse" : "row"}>
      <div>
        <h2>{project.title}</h2>
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
