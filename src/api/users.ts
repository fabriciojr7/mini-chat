export type User = { id: number; name: string; photo: string };

export const CURRENT_USER_ID = 1;

let users: User[] = [
  { id: CURRENT_USER_ID, name: 'you', photo: '' },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    photo:
      'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2023/01/02114557/cr7-champions-emprestimo.jpg',
  },
  {
    id: 3,
    name: 'Neymar',
    photo:
      'https://images.ctfassets.net/3mv54pzvptwz/55YLwKPDnRXkqMBITRpWbC/0c2aefc04afa455c20e9ca0d209698e0/53174188191_42d4c831ae_o.jpg',
  },
  {
    id: 4,
    name: 'Mbappé',
    photo:
      'https://veja.abril.com.br/wp-content/uploads/2023/07/GettyImages-1254687348.jpg?crop=1&resize=1212,909',
  },
  {
    id: 5,
    name: 'Messi',
    photo:
      'https://uploads.metroimg.com/wp-content/uploads/2022/12/18154156/messi-trofeu.jpeg',
  },
];


export function getUsers(): Promise<User[]> {
  return new Promise((resolve) => setTimeout(() => resolve([...users]), 300));
}
