// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './PR32_3/Home'
// import Detail from './PR32_3/Detail';

// import TodoList from './PR32_4/TodoList';
// import TodoDetail from './PR32_4/TodoDetail';

// import EmotionPage from "./PR33_1/EmotionPage"
// import LinariaPage from "./PR33_1/LinariaPage"
// import StyledComponentsPage from "./PR33_1/StyledComponentsPage"

// import "bootstrap/dist/css/bootstrap.min.css"
// import LoginForm from "./PR34_2/Login";

// import MyForm from "./PR37/PR37_1/MyFrom";
import MyForm from "./PR37/PR37_2/MyFrom";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/detail/:id" element={<Detail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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

function App() {  
  return (
    <div>
      {/* <EmotionPage /> */}
      {/* <LinariaPage /> */}
      {/* <StyledComponentsPage/> */}
      {/* <LoginForm/> */}
      <MyForm />
    </div>
  );
}

export default App;