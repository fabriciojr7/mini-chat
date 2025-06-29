import type { User } from "../../../../api/users";
import { AuthorPhoto } from "../../../AuthorPhoto";
import { ContainerTypingMessage, AuthorName } from "./styles";

interface TypingMessageProps {
  author?: User;
}

export function TypingMessage({author}: TypingMessageProps){
  return (
    <ContainerTypingMessage>
      <AuthorPhoto>
        <img src={author?.photo} alt={author?.name} />
      </AuthorPhoto>
      <AuthorName>{author?.name} está digitando...</AuthorName>
    </ContainerTypingMessage>
  )
}
