import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d8d8d9;

  svg {
    animation: ${spin} 1s linear infinite;
  }
`;
