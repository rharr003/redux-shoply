import { useSelector } from "react-redux";
import Item from "./Item";

function Store() {
  const items = useSelector((state) => state.products);
  return (
    <div>
      <h1>Store</h1>
      <div
        className="store"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image_url={item.image_url}
          />
        ))}
      </div>
    </div>
  );
}

export default Store;
