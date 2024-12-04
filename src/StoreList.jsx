import React from "react";

const StoreList = ({ stores }) => {
  if (!stores || stores.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div>
      {stores.map((store, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{store.name}</h3>
          <p>Address: {store.address}</p>
          <p>Phone: {store.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default StoreList;
