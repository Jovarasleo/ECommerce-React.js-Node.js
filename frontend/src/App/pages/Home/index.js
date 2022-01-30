import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchItems } from "../../content/items/itemActions";

function Home({ fetchItems, itemsData }) {
  useEffect(async () => {
    fetchItems();
  }, []);
  console.log(itemsData, itemsData.items);
  return itemsData.loading ? (
    <h2>loading</h2>
  ) : itemsData.error ? (
    <h2>error</h2>
  ) : (
    <div>
      <h2>Items</h2>
      <div>
        {itemsData.items &&
          itemsData.items.map((item) => <p key={item.id}>{item.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
