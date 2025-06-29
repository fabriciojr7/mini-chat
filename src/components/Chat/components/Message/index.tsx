import { CURRENT_USER_ID } from "../../../../api/users";
import { AuthorPhoto } from "../../../AuthorPhoto";
import { AuthorName, ContainerMessage, MessageItem, MessageText } from "./styles";

interface MessageProps {
  idAuthor: number,
  author: string
  photo: string;
  text: string
}

export function Message({idAuthor, author, photo, text}: MessageProps){
  const you = idAuthor === CURRENT_USER_ID

  return (
    <ContainerMessage you={you}>

      {!you && (
        <AuthorPhoto>
          <img src={photo} alt={author} />
        </AuthorPhoto>
      )}

      <MessageItem>
        <MessageText you={you}>
          {text}
        </MessageText>

        {!you && (
          <AuthorName>{author}</AuthorName>
        )}
      </MessageItem>
    </ContainerMessage>
  )
}
