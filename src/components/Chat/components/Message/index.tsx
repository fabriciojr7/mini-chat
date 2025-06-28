import { AuthorName, AuthorPhoto, ContainerMessage, MessageItem, MessageText } from "./styles";

interface MessageProps {
  you?: boolean;
}

export function Message({you}: MessageProps){
  return (
    <ContainerMessage you={you}>

      {!you && (
        <AuthorPhoto/>
      )}

      <MessageItem>
        <MessageText you={you}>
          Mensagem
        </MessageText>

        {!you && (
          <AuthorName>Autor</AuthorName>
        )}
      </MessageItem>
    </ContainerMessage>
  )
}
