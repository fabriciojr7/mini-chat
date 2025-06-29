import styled from "styled-components";

export const ContainerSidebar = styled.div`
  background: #262627;
  border-right: 1px solid #130b0d;
  height: 100%;
  width: 18rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const CurrentUSer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 1rem 0;
  width: 100%;

  div{
    width: 100%;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`

export const Users = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding: 1rem 0;

  h3{
    font-size: 1.1rem;
    text-align: center;
  }
`

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const InputSideBar = styled.input`
  height: 2rem;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(88, 88, 88);
  outline: none;
  color: #d8d8d9;
  caret-color: #d8d8d9;
`
