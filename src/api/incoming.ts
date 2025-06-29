import { sendMessage, type Message } from "./Messages";


const pool: Omit<Message, 'id'>[] = [
  {
    userId: 5,
    text: 'CR7, se quiser passo um ingresso VIP… mas nada de foto com a taça! 😂',
  },
  {
    userId: 2,
    text: 'Nunca subestime quem já ganhou tudo, Messi. Ainda levanto mais uma!',
  },
  {
    userId: 4,
    text: 'Ei, respeitem! No Bernabéu já estamos fazendo espaço pro troféu 🏆',
  },
  {
    userId: 3,
    text: 'Enquanto isso eu solto o churrasco em Mangaratiba e mando boa sorte 🍖',
  },
  {
    userId: 5,
    text: 'Fechado, Ney! Façam o react ao vivo que eu mando lembrança 😎',
  },
];

export function startIncoming(
  onPreview: (draft: Omit<Message, 'id'>) => void,
  onReceive: (real: Message) => void
): () => void {
  let i = 0, timer: ReturnType<typeof setTimeout> | null = null;

  const loop = () => {
    if (i >= pool.length) return;
    const draft = pool[i++];
    onPreview(draft);

    timer = setTimeout(() => {
      sendMessage(draft).then((msg) => {
        onReceive(msg);
        loop();
      });
    }, 5000);
  };

  loop();
  return () => timer && clearTimeout(timer);
}
