import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #975d69;
  color: #fff;
  padding: 5rem 0 3rem;

  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #b9b9b9;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
