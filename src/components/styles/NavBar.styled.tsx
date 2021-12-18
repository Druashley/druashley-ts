import styled from "styled-components";

export const StyledNavBar = styled.nav`
  background-color: #d1e8e4;

  .custom-shape-divider-top-1639852579 {
    position: absolute;
    z-index: -5;
    top: 1;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1639852579 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 233px;
  }

  .custom-shape-divider-top-1639852579 .shape-fill {
    fill: #d1e8e4;
  }
`;

export const Nav = styled.nav`
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h1 {
      margin-bottom: 1.25rem;
    }
  }
`;
