import { useState } from "react";
import "./Test.css";

function Test() {
  const [orderedList, setOrderedList] = useState({});

  const foodItems = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"];

  const addToOrderedList = (food) => {
    setOrderedList((prevList) => ({
      ...prevList,
      [food]: (prevList[food] || 0) + 1,
    }));
  };

  return (
    <div className="App">
      <h1>Food Order App</h1>

      <h2>Menu</h2>
      <ul>
        {foodItems.map((food, index) => (
          <li key={index}>
            <button onClick={() => addToOrderedList(food)}>{food}</button>
          </li>
        ))}
      </ul>

      <h2>Your Order</h2>
      <ol>
        {Object.entries(orderedList).map(([food, quantity], index) => (
          <li key={index}>
            {food} {quantity}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Test;
