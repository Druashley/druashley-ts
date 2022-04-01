import styled from "styled-components";

export const StyledHomeHeader = styled.div`
  margin-top: 15rem;

  background: linear-gradient(to bottom right, #d1e8e4, #975d6928, #eae7c6);
  padding: 1.5rem 2rem;

  p {
    opacity: 100%;
    padding: 0 1.5rem 1rem 1.5rem;
    font-size: 2.5rem;
    line-height: 3.5rem;
    font-weight: bolder;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    p {
      line-height: 2.5rem;
      font-size: 1.75rem;
      padding: 0;
    }
  }
`;
