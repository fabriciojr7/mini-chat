import { CURRENT_USER_ID } from './users';

export type Message = { id: number; userId: number; text: string };

let messages: Message[] = [
  {
    id: 1,
    userId: 4,
    text: 'Galera, animação total: o Real Madrid tá confirmado no Mundial de 2029!',
  },
  {
    id: 2,
    userId: 2,
    text: 'Parabéns, Kylian… mas o Al‑Nassr ficou de fora desta vez.',
  },
  {
    id: 3,
    userId: 3,
    text: 'Tamo junto, CR7… o Santos também não conseguiu vaga 😅',
  },
  {
    id: 4,
    userId: 5,
    text: 'Hahaha! Vou mandar um aceno da taça pra vocês aí no sofá 🔥',
  },
];

let nextId = messages.length + 1;

export function getMessages(): Promise<Message[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve([...messages]), 500)
  );
}

export function sendMessage(
  payload: Omit<Message, 'id'>
): Promise<Message> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMsg = { ...payload, id: nextId++ };
      messages = [...messages, newMsg];
      resolve(newMsg);
    }, 500);
  });
}

export function sendFromCurrentUser(text: string) {
  return sendMessage({ userId: CURRENT_USER_ID, text });
}
