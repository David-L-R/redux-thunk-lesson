import React from "react";
import { Routes, Route } from "react-router-dom";
import { Posts } from "./components";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Posts />} />
      </Routes>
    </div>
  );
}
