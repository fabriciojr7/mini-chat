import { Sidebar } from "../Sidebar";
import { DrawerContainer, Overlay } from "./styles";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Drawer({ isOpen, onClose }: DrawerProps) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />

      <DrawerContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Sidebar/>
      </DrawerContainer>
    </>
  );
}
