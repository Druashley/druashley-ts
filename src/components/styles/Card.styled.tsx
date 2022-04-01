import styled from "styled-components";

interface Props {
  layout: string;
}

export const StyledCard = styled.div<Props>`
  display: flex;
  align-items: start;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.15);
  margin: 2.5rem 0;
  padding: 1rem;
  flex-direction: ${(props) => props.layout};

  background:  ${(props) => props.layout === "row" ?  "linear-gradient(to bottom right, #eae7c6, #d1e8e4)" :  "linear-gradient(to bottom left, #d1e8e4, #eae7c6)" } ;


  .button-container {
    display: flex;
    justify-content: center;
  }

  h2 {
    font-size: 2em;
    padding: 0.5rem 0rem;
    text-align: center;
  }

  h3 {
    font-size: 2em;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #000;
  }

  & > div {
    flex: 1;
  }
  ul{
    list-style-type: none;
    justify-items: center;
    margin: auto;
    padding-inline-start: 0;
    line-height: 1;
    font-weight: bold;
  }

  li {
    list-style: none;
    text-align: center;
    margin: 1rem;
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
