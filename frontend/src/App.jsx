import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrudApp from "./components/CrudApp.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CrudApp></CrudApp>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
