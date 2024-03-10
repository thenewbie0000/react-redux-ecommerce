import { useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Carts from "./components/Carts";
import CartsDetail from "./components/CartsDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/"  element={<Carts />}/>
        <Route path="/cart/:id"  element={<CartsDetail />}/>
      </Routes>
    </>
  );
}

export default App;
