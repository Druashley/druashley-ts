import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #bccc9a;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 2rem;
  margin-right: 1rem;
  color: #333;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
