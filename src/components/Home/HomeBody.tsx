import React from "react";
import Card from "./Card";
import { Container } from "../styles/Container.styled";
import Projects from "../../Projects";

const HomeBody: React.FC = () => {
  return (
    <div>
      <Container>
        {Projects.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </Container>
    </div>
  );
};

export default HomeBody;
