import React, { useState } from "react";
import Hero from "./Component/Hero";
import data from "./data";
import Empty from "./Component/Empty";

const App = () => {
  const [tours, setTours] = useState(data);

  function parentRemoveHandler(id) {
    console.log("Parent", id);
    let newTours = tours.filter((iteam) => iteam.id !== id);
    setTours(newTours);
  }

  function resetHandler() {
    setTours(data);
  }

  return (
    <div>
      {tours.length >= 1 ? (
        <Hero tours={tours} parentRemoveHandler={parentRemoveHandler}></Hero>
      ) : (
        <Empty resetHandler={resetHandler}></Empty>
      )}
    </div>
  );
};

export default App;
