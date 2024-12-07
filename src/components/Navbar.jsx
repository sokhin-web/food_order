/* eslint-disable react/prop-types */
import { useState } from "react";

function Navbar({ setCategory }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCategory(category);
  };

  return (
    <div className="mt-[50px] phone:mt-[20px] animate-slide_right_center">
      <div className="text-white text-xl font-serif flex flex-row justify-center flex-wrap items-center gap-10 phone:gap-2 phone:text-sm  phone:justify-start ">
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm phone:px-2 ${
            activeCategory === "All"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All Food
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  phone:px-2 ${
            activeCategory === "Pizza"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("Pizza")}
        >
          Pizza
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  phone:px-2 ${
            activeCategory === "Salad"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("Salad")}
        >
          Salad
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  phone:px-2 ${
            activeCategory === "Pasta"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("Pasta")}
        >
          Spaghetti
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  phone:px-2 ${
            activeCategory === "Dessert"
              ? "bg-gray-100 text-teal-600 "
              : "bg-teal-500 hover:bg-gray-100 hover:text-teal-600 "
          }`}
          onClick={() => handleCategoryClick("Dessert")}
        >
          Dessert
        </p>
        <p
          className={`cursor-pointer py-1 px-5 rounded-sm  phone:px-2 ${
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
