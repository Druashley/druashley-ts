import React from "react";
import { StyledHomeHeader } from "../styles/Home.styled";
import { Flex } from "../styles/Flex.styled";
import { Container } from "../styles/Container.styled";
const HomeHeader: React.FC = () => {
  return (
    <StyledHomeHeader>
      <Container>
        <Flex>
          <p>
            With two years of experience, Druashley has earned a reputation as
            one of Southern Oregon's premier frontend web developers.
          </p>
        </Flex>
      </Container>
    </StyledHomeHeader>
  );
};

export default HomeHeader;
