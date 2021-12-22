import React from "react";
import { StyledHomeHeader } from "../styles/Home.styled";
import { Container } from "../styles/Container.styled";
const HomeHeader: React.FC = () => {
  return (
    <Container>
      <StyledHomeHeader>
        <p>
          With two years of experience, Druashley has earned a reputation as one
          of Southern Oregon's premier frontend web developers.
        </p>
      </StyledHomeHeader>
    </Container>
  );
};

export default HomeHeader;
