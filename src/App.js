import React from "react";
import { Routes, Route } from "react-router-dom";
import { Post, Posts } from "./components";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>
    </div>
  );
}
