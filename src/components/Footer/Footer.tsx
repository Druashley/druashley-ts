import React from "react";
import { StyledFooter } from "../styles/Footer.style";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <ul>
            <li>Druashley - A frontend web developer</li>
            <li>
              <a
                href="https://twitter.com/Dru_ashley"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Druashley"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <p>👋</p>
            </li>
          </ul>
        </Flex>
      </Container>
    </StyledFooter>
  );
};
export default Footer;
