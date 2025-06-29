import styled from "styled-components";

interface AuthorPhotoProps {
  size?: string;
}

export const AuthorPhoto = styled.div<AuthorPhotoProps>`
  width: ${({ size }) => size || '3rem'};
  height: ${({ size }) => size || '3rem'};
  border-radius: 100%;
  background: #262627;

  img {
    width: ${({ size }) => size || '3rem'};
    height: ${({ size }) => size || '3rem'};
    border-radius: 100%;
    object-fit: cover;
  }
`;
