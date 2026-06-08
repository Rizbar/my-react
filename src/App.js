import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './PR32_3/Home'
import Detail from './PR32_3/Detail';

// import TodoList from './PR32_4/TodoList';
// import TodoDetail from './PR32_4/TodoDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<TodoList />} />
//         <Route path="/detail/:id" element={<TodoDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;