import { useRecoilValue } from 'recoil';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams dan useNavigate
import { todoListState, userState } from './atoms';

export default function Detail() {
  const { id } = useParams(); // Mengambil ID dari URL (/detail/:id)
  const navigate = useNavigate(); // Hook untuk kembali ke halaman utama
  
  const todos = useRecoilValue(todoListState);
  const currentUser = useRecoilValue(userState);

  // Cari data todo berdasarkan ID dari parameter URL (di-convert ke Number)
  const todoItem = todos.find((todo) => todo.id === Number(id));

  if (!todoItem) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Data tidak ditemukan.</p>
        <button onClick={() => navigate('/')}>Kembali ke Beranda</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '8px', marginTop: '20px' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '15px', cursor: 'pointer' }}>
        ⬅ Kembali ke List
      </button>
      
      <h2>Detail Tugas</h2>
      <p style={{ fontSize: '14px', color: '#555' }}>
        Dilihat oleh: <strong>{currentUser}</strong>
      </p>
      
      <hr />
      
      <h3>{todoItem.title}</h3>
      <p><strong>Deskripsi:</strong> {todoItem.description}</p>
      
      <div style={{ 
        display: 'inline-block', 
        padding: '10px', 
        backgroundColor: '#e9ecef', 
        borderRadius: '5px', 
        fontWeight: 'bold' 
      }}>
        Total Vote Saat Ini: {todoItem.votes} 👍
      </div>
    </div>
  );
}