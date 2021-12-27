import React from "react";
import { StyledFooter } from "../styles/Footer.style";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { StyledLogo } from "../styles/Logo.styled";
const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <ul>
            <li>
              <StyledLogo>Druashley</StyledLogo>
            </li>
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
              <p className="icon">🦆</p>
            </li>
          </ul>
        </Flex>
      </Container>
    </StyledFooter>
  );
};
export default Footer;
