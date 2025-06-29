import { useEffect, useRef, useState, type FormEvent } from "react";
import { useChat } from "../../hooks/useChat";
import { IconButton } from "../IconButton";
import { Message } from "./components/Message";
import { TypingMessage } from "./components/TypingMessage";
import { ContainerChat, ContentChat, Footer, Header, InputChat } from "./styles";
import { List, PaperPlaneRight } from "phosphor-react";
import { Loading } from "../Loading";
import { Drawer } from "../Drawer";


export function Chat(){
  const [text, setText] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { messages, loading, post, typing, author } = useChat();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    post(text.trim());
    setText('');
  };

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <ContainerChat>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}/>

      <Header>
        <div>
          <IconButton
            onClick={() => setIsDrawerOpen(true)}
          >
            <List/>
          </IconButton>
        </div>

        <h1>Super Mundial - Chat</h1>
      </Header>

      <ContentChat>
        {loading ? (
          <Loading/>
        ) : (
            messages.map((m) => (
              <Message
                key={m.id}
                idAuthor={m.userId}
                author={author(m.userId)?.name!}
                photo={author(m.userId)?.photo!}
                text={m.text}
              />
            ))
        )}

        {typing && !loading && (
          <TypingMessage author={author(typing.userId)!}/>
        )}

        <div ref={bottomRef} />
      </ContentChat>

      <Footer>
        <form>
          <InputChat
            placeholder="Escreva sua mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <IconButton onClick={handleSubmit}>
            <PaperPlaneRight size={18} />
          </IconButton>
        </form>
      </Footer>
    </ContainerChat>
  )
}
