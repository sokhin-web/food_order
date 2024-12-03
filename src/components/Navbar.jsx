/* eslint-disable react/prop-types */
import { useState } from "react";

function Navbar({ setCategory }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCategory(category);
  };

  return (
    <div className="mt-[50px]">
      <div className="text-white text-xl font-serif flex flex-row justify-center items-center gap-10">
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  ${
            activeCategory === "All"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All Food
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  ${
            activeCategory === "Pizza"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("Pizza")}
        >
          Pizza
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  ${
            activeCategory === "Salad"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("Salad")}
        >
          Salad
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  ${
            activeCategory === "Pasta"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("Pasta")}
        >
          Spaghetti
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  ${
            activeCategory === "Dessert"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("Dessert")}
        >
          Dessert
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  ${
            activeCategory === "Drink"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("Drink")}
        >
          Drinks
        </p>
      </div>
    </div>
  );
}

export default Navbar;
