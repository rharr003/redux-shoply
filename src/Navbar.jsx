import { useSelector } from "react-redux";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h2>Home</h2>
      </Link>
      <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
        <p>
          Cart:{" "}
          {cart.reduce((acc, val) => {
            return acc + val.quantity;
          }, 0)}
        </p>
      </Link>
    </div>
  );
}

export default Navbar;
