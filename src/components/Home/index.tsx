import { Chat } from "../Chat";
import { Sidebar } from "../Sidebar";
import { ContainerHome, SidebarHome } from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <SidebarHome>
        <Sidebar/>
      </SidebarHome>
      <Chat/>
    </ContainerHome>
  )
}
