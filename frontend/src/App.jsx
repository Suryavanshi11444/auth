// import React from 'react';
// import './index.css';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Register from "./components/Register";
// import Login from "./components/Login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Redirect root path "/" to "/login" */}
//         <Route path="/" element={<Navigate to="/login" />} />

//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
