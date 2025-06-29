import styled from "styled-components";

export const ContainerHome = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const SidebarHome = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: inline-flex;
  }
`;
