import React, { useState } from "react";
import StoreList from "./StoreList";
import storeData from "./storeData.json";

const App = () => {
  const [region, setRegion] = useState("Kyiv");

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div>
      <h1>Store Information</h1>
      <select value={region} onChange={handleRegionChange}>
        <option value="Kyiv">Kyiv</option>
        <option value="Lviv">Lviv</option>
      </select>
      <StoreList stores={storeData[region]} />
    </div>
  );
};

export default App;
