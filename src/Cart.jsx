import { useSelector, useDispatch } from "react-redux";
import { REMOVEFROMCART, INCREASEQUANTITY, DECREASEQUANTITY } from "./actions";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((acc, val) => {
    return acc + val.quantity * val.price;
  }, 0);

  function handleIncreaseQuantity(item) {
    dispatch({
      type: INCREASEQUANTITY,
      payload: {
        name: item.name,
        price: item.price,
        description: item.description,
        image_url: item.image_url,
      },
    });
  }

  function handleDecreaseQuantity(item) {
    dispatch({
      type: DECREASEQUANTITY,
      payload: {
        name: item.name,
        price: item.price,
        description: item.description,
        image_url: item.image_url,
      },
    });
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item">
            <img
              src={item.image_url}
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                minHeight: "200px",
                margin: "10px 25px",
              }}
              alt={item.name}
            />
            <h3>{item.name}</h3>

            <p>{`$${item.price}`}</p>
            <div
              className="quantity"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button onClick={() => handleIncreaseQuantity(item)}>+</button>

              <p>{item.quantity}</p>
              <button onClick={() => handleDecreaseQuantity(item)}>-</button>
            </div>
            <p>{`$${item.price * item.quantity}`}</p>
            <button
              onClick={() =>
                dispatch({
                  type: REMOVEFROMCART,
                  payload: {
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    image_url: item.image_url,
                  },
                })
              }
              className="remove-item"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <h3>Total: {total}</h3>
    </div>
  );
}

export default Cart;
