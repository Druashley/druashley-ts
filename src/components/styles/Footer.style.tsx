import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #975d69;
  color: #fff;
  padding: 5rem 0 3rem;
  line-height: 1;

  ul {
    list-style-type: none;
    display: inline-grid;
    grid-auto-flow: row;
    grid-gap: 1rem;
    justify-items: center;
    margin: auto;
    padding-inline-start: 0;
  }

  ul li {
    margin-bottom: 0.25rem;
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

  li:hover ~ li p {
    animation: wave-animation 0.3s infinite;
  }

  @keyframes wave-animation {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(-15deg);
    }
  }
  .icon {
    font-size: 2.5rem;
    margin: 0;
  }
`;
