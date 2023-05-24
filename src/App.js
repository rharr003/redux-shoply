import "./App.css";
import Store from "./Store";
import { Route, Routes, useNavigate, redirect } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Navbar from "./Navbar";
import Cart from "./Cart";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Store />} />
        <Route path="/:name" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
