import { useEffect, useState, useCallback } from 'react';
import { startIncoming } from '../api/incoming';
import { getUsers, type User } from '../api/users';
import { getMessages, sendFromCurrentUser, type Message } from '../api/Messages';

export function useChat() {
  const [users,     setUsers]     = useState<User[]>([]);
  const [messages,  setMessages]  = useState<Message[]>([]);
  const [typing,    setTyping]    = useState<Omit<Message,'id'>|null>(null);
  const [loading,   setLoading]   = useState(true);

  useEffect(() => {
    Promise.all([getUsers(), getMessages()]).then(([u, m]) => {
      setUsers(u);
      setMessages(m);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const stop = startIncoming(
      (draft) => setTyping(draft),
      (real)  => {
        setTyping(null);
        setMessages((prev) => [...prev, real]);
      }
    );
    return stop;
  }, []);

  const post = useCallback(
    (text: string) =>
      sendFromCurrentUser(text).then((m) =>
        setMessages((prev) => [...prev, m])
      ),
    []
  );

  const author = (id: number) =>
    users.find((u) => u.id === id) ?? null;

  return { loading, messages, typing, post, author, users };
}
