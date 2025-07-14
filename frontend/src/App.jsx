import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import FoodList from "./components/FoodList";

const App = () => {
  return (
    <div>
      <Header />
      <FoodList />
    </div>
  );
};

export default App;
