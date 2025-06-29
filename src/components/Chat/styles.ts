import styled from "styled-components";
import bgChat from '../../assets/background-chat.jpeg';

export const ContainerChat = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  background: #262627;
  border-bottom: 0.5px solid #130b0d;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  h1{
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  div{
    position: absolute;
    left: 10px;
    display: inline-flex;

    @media (min-width: 1024px) {
      display: none;
    }
  }
`

export const ContentChat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-image: url(${bgChat});
  background-repeat: repeat;
  background-size: auto;
`

export const Footer = styled.footer`
  form{
    width: 100%;
    height: 100%;
    background: #262627;
    padding: 0.5rem;
    border-top: 1px solid #130b0d;
    display: flex;
    align-items: end;
    gap: .5rem;
  }
`

export const InputChat = styled.input`
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #d8d8d9;
  caret-color: #d8d8d9;
`


