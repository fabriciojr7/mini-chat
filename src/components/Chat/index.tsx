import { IconButton } from "../IconButton";
import { Message } from "./components/Message";
import { ContainerChat, ContentChat, Footer, Header, InputChat } from "./styles";
import { PaperPlaneRight } from "phosphor-react";

export function Chat(){
  return (
    <ContainerChat>
      <Header>
        <h1>Super Mundial</h1>
      </Header>

      <ContentChat>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message you/>
        <Message/>
        <Message/>
        <Message/>
        <Message you/>
        <Message/>
        <Message/>
        <Message you/>
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
