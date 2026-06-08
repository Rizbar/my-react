import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: 'User 1',
});

export const todoListState = atom({
  key: 'todoListState',
  default: [
    { id: 1, title: 'Belajar React & Recoil', votes: 5, description: 'Mendalami state management menggunakan Recoil di React.' },
    { id: 2, title: 'Bikin Project Todo App', votes: 12, description: 'Membuat aplikasi praktis dengan fitur voting dan multi-user.' },
    { id: 3, title: 'Review Pull Request', votes: 2, description: 'Memeriksa kode tim sebelum digabung ke branch utama.' },
  ],
});

export const selectedTodoIdState = atom({
  key: 'selectedTodoIdState',
  default: null,
});