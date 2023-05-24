import { useDispatch } from "react-redux";
import { ADDTOCART, REMOVEFROMCART } from "./actions";
import { Link } from "react-router-dom";
import "./Item.css";
function Item({ name, price, description, image_url }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch({
      type: ADDTOCART,
      payload: { name, price, description, image_url, quantity: 1 },
    });
  }

  function handleRemoveFromCart() {
    dispatch({
      type: REMOVEFROMCART,
      payload: { name, price, description, image_url },
    });
  }
  return (
    <div className="item">
      <img
        src={image_url}
        style={{
          maxWidth: "200px",
          maxHeight: "200px",
          minHeight: "200px",
          margin: "10px 25px",
        }}
        alt={name}
      />
      <Link to={`/${name}`} style={{ textDecoration: "none", color: "black" }}>
        <h3>{name}</h3>
      </Link>
      <p>{`$${price}`}</p>
      <button onClick={handleAddToCart} className="add-item">
        Add
      </button>
      <button onClick={handleRemoveFromCart} className="remove-item">
        Remove
      </button>
    </div>
  );
}

export default Item;
