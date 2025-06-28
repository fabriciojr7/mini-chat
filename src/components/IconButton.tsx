import styled from "styled-components";

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;

  padding: 0.5rem;
  border-radius: 0.25rem;

  color: #d8d8d9;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
