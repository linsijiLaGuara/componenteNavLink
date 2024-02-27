import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbarlink from "./componente/Navbarlink";
import Home from "./views/Home";
import Personajes from "./views/Personajes";

export default function App() {
  return (
    <>
      <Navbarlink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes/:id" element={<Personajes />} />
      </Routes>
    </>
  );
}
