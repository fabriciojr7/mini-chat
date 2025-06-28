import styled from "styled-components";

interface MessageProps {
  you?: boolean;
}

export const ContainerMessage = styled.div<MessageProps>`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: ${({ you }) => (you ? "end" : "start")};
`;

export const MessageItem = styled.div`
  width: fit-content;
  max-width: 50%;
`

export const MessageText = styled.div<MessageProps>`
  width: 100%;
  background: #262627;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${({ you }) => (you ? '10px': 0)};
  border-bottom-right-radius: ${({ you }) => (you ? 0: '10px')};
  min-height: 3.5rem;
  padding: 1rem;
  font-size: 1.2rem;
`

export const AuthorPhoto = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  background: #262627;
`

export const AuthorName = styled.div`
  margin-top: .5rem;
  font-size: .8rem;
`
