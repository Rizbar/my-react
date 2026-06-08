import { create } from 'zustand';

export const useStore = create((set) => ({
  todoItems: [
    { id: 1, title: 'Belajar React', votes: 0 },
    { id: 2, title: 'Mengerjakan tugas', votes: 0 },
  ],
  user: 'User 1',
  setUser: (newUser) => set({ user: newUser }),
  vote: (id) => set((state) => ({
    todoItems: state.todoItems.map(item =>
      item.id === id ? { ...item, votes: item.votes + 1 } : item
    )
  })),
  setTodoItems: (newItems) => set({ todoItems: newItems }),
}));