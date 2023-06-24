import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { SinglePost } from "./pages/singlePost/SinglePost";
import { Undefined } from "./pages/undefined/Undefined";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </>
  );
}

export default App;
