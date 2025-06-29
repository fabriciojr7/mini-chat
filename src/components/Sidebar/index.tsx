import { CheckSquare, NotePencil, User, XSquare } from "phosphor-react";
import { CURRENT_USER_ID } from "../../api/users";
import { useChat } from "../../hooks/useChat";
import { AuthorPhoto } from "../AuthorPhoto";
import { Loading } from "../Loading";
import { ContainerSidebar, CurrentUSer, InputSideBar, UserItem, Users } from "./styles";
import { IconButton } from "../IconButton";
import { useStoredName } from "../../hooks/useStoredName";

export function Sidebar(){
  const {users, loading} = useChat()
  const {currentUserName, isEditing, saveName, setIsEditing, setCurrentUserName} = useStoredName()

  return (
    <ContainerSidebar>
      <CurrentUSer>
        {!isEditing && (
          <div>
            <User size={20}/>

            <span>{currentUserName || 'Você'}</span>

            <IconButton onClick={() => setIsEditing(true)}>
              <NotePencil/>
            </IconButton>
          </div>
        )}

        {isEditing && (
          <div>
            <InputSideBar
              placeholder="Seu nome"
              value={currentUserName}
              onChange={(e) => setCurrentUserName(e.target.value)}
            />

            <IconButton onClick={() => setIsEditing(false)}>
              <XSquare/>
            </IconButton>

            <IconButton onClick={saveName}>
              <CheckSquare/>
            </IconButton>
          </div>
        )}
      </CurrentUSer>

      <Users>
        {loading ? (
          <Loading/>
        ) : (
          <>
            <h3>Participantes</h3>

            {users
              .filter(u => u.id !== CURRENT_USER_ID)
              .map(u => (
                <UserItem key={u.id}>
                  <AuthorPhoto size="2rem">
                    <img src={u.photo} alt={u.name} />
                  </AuthorPhoto>

                  <span>{u.name}</span>
                </UserItem>
            ))}
          </>
        )}
      </Users>
    </ContainerSidebar>
  )
}
