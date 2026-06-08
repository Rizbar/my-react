import { useStore } from './store';
import { useParams, Link } from 'react-router-dom';

const TodoDetail = () => {
  const { id } = useParams();
  const { todoItems } = useStore();

  const item = todoItems.find((todo) => todo.id === parseInt(id));

  if (!item) {
    return (
      <div>
        <h2>Item tidak ditemukan</h2>
        <Link to="/">Kembali ke Todo List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Detail Todo</h2>
      <p>Judul: {item.title}</p>
      <p>Votes: {item.votes}</p>
      <Link to="/">Kembali ke Todo List</Link>
    </div>
  );
};

export default TodoDetail;