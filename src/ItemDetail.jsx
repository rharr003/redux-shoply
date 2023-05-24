import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADDTOCART, REMOVEFROMCART } from "./actions";
function ItemDetail() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const item = useSelector((state) =>
    state.products.find((p) => p.name === name)
  );

  return (
    <div className="item-detail">
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
      <p>{item.description}</p>
      <button
        onClick={() =>
          dispatch({
            type: ADDTOCART,
            payload: {
              name: item.name,
              price: item.price,
              description: item.description,
              image_url: item.image_url,
              quantity: 1,
            },
          })
        }
        className="add-item"
      >
        Add
      </button>
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
  );
}

export default ItemDetail;
