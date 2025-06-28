import { IconButton } from "../IconButton";
import { ContainerChat, ContentChat, Footer, Header, InputChat } from "./styles";
import { PaperPlaneRight } from "phosphor-react";

export function Chat(){
  return (
    <ContainerChat>
      <Header>
        <h1>Super Mundial</h1>
      </Header>

      <ContentChat>
      </ContentChat>

      <Footer>
        <InputChat
          placeholder="Mensagem"
        />

        <IconButton>
          <PaperPlaneRight size={18} />
        </IconButton>
      </Footer>
    </ContainerChat>
  )
}
