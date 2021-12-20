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

  h3 {
    text-align: center;
  }
  a {
    margin-right: 0.25rem;
    color: #98a57b;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
