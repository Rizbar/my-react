import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { todoListState, userState } from './atoms';

export default function Home() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [todos, setTodos] = useRecoilState(todoListState);
  const navigate = useNavigate(); // Hook untuk navigasi halaman

  const handleVote = (id, e) => {
    e.stopPropagation(); // Biar tidak memicu navigasi saat klik tombol vote
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, votes: todo.votes + 1 } : todo
      )
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Todo List App</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="user-select"><strong>Aktif Sebagai: </strong></label>
        <select 
          id="user-select"
          value={currentUser} 
          onChange={(e) => setCurrentUser(e.target.value)}
          style={{ padding: '5px', marginLeft: '10px' }}
        >
          <option value="User 1">User 1 (Budi)</option>
          <option value="User 2">User 2 (Siti)</option>
          <option value="User 3">User 3 (Andi)</option>
        </select>
      </div>

      <hr />

      <h3>Daftar Tugas</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            onClick={() => navigate(`/detail/${todo.id}`)} // Pindah halaman sesuai route /detail/:id
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '10px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f9f9f9'
            }}
          >
            <div>
              <span style={{ fontWeight: 'bold' }}>{todo.title}</span>
              <br />
              <small style={{ color: '#666' }}>Votes: {todo.votes}</small>
            </div>
            
            <button 
              onClick={(e) => handleVote(todo.id, e)}
              style={{
                padding: '8px 12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              👍 Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}