import { createStore } from "redux";
import data from "./data.json";

console.log(data);

const initialState = { products: Object.values(data.products), cart: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.find((x) => x.name === action.payload.name)) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.name === action.payload.name
              ? { ...x, quantity: x.quantity + 1 }
              : x
          ),
        };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((x) => x.name !== action.payload.name),
      };
    case "INCREASE_QUANTITY":
      console.log("i went off");
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.name === action.payload.name
            ? { ...x, quantity: x.quantity + 1 }
            : x
        ),
      };
    case "DECREASE_QUANTITY":
      console.log("i went off");
      return {
        ...state,
        cart: state.cart
          .map((x) =>
            x.name === action.payload.name
              ? { ...x, quantity: x.quantity - 1 }
              : x
          )
          .filter((x) => x.quantity !== 0),
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
