import styled from "styled-components";

interface Props {
  layout: string;
}

export const StyledCard = styled.div<Props>`
  display: flex;
  align-items: start;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  margin: 2.5rem 0;
  padding: 1rem;
  flex-direction: ${(props) => props.layout};

  h2 {
    font-size: 2em;
  }

  h3 {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #000;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    p {
      text-align: left;
    }
  }
`;
