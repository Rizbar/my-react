import { useStore } from './store';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const { todoItems, user, setUser, vote } = useStore();

  return (
    <div>
      <h1>Todo List</h1>
      
      {/* Pilih User */}
      <select value={user} onChange={(e) => setUser(e.target.value)}>
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>

      {/* Daftar Todo */}
      <ul>
        {todoItems.map(item => (
          <li key={item.id} style={{ margin: '10px 0' }}>
            {/* Link ke halaman detail */}
            <Link to={`/detail/${item.id}`} style={{ marginRight: '10px' }}>
              {item.title}
            </Link>
            <span>Votes: {item.votes}</span>
            <button onClick={() => vote(item.id)} style={{ marginLeft: '10px' }}>
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;