import React from "react";
import { StyledHomeHeader } from "../styles/Home.styled";
import { Container } from "../styles/Container.styled";
const HomeHeader: React.FC = () => {
  return (
    <StyledHomeHeader>
      <Container>
        <p>
          With two years of experience, Druashley has earned a reputation as one
          of Southern Oregon's premier frontend web developers.
        </p>
      </Container>
    </StyledHomeHeader>
  );
};

export default HomeHeader;
