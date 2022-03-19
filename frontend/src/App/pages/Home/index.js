import React, { useCallback, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../content/itemActions";
import ItemCard from "../../components/itemCard/index.tsx";
import content from "../../content";
function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => content.selectors.getItems(state));
  useEffect(() => {
    dispatch(content.actions.getItems());
    console.log("items", items);
  }, [dispatch]);
  return items?.loading ? (
    <h2>loading</h2>
  ) : items?.error ? (
    <h2>error</h2>
  ) : (
    <div>
      {items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            title={item.name}
            price={item.price}
          ></ItemCard>
        );
      })}
    </div>
  );
}

export default Home;
