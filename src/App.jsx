import { useState } from "react";
import Navbar from "./components/Navbar";
import OrderList from "./components/OrderList";
import Menu from "./components/Menu";
import { RiMoonClearFill } from "react-icons/ri";

function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [category, setCategory] = useState("All"); // Default to All
  const [appBg, setAppBg] = useState("bg-white");
  const [colorBlack, setColorBlack] = useState("text-black");
  const [borderGray, setBorderGray] = useState("border-gray-300");
  const [bg_gray_100, setBg_gray_100] = useState("bg-gray-100");

  const toggleStyle = () => {
    setAppBg((prevClass) =>
      prevClass.includes("bg-white") ? "bg-slate-950 " : "bg-white "
    );
    setColorBlack((prevClass) =>
      prevClass.includes("text-black") ? "text-white" : "text-black"
    );
    setBorderGray((prevClass) =>
      prevClass.includes("border-gray-300")
        ? "border-teal-500"
        : "border-gray-300"
    );
    setBg_gray_100((prevClass) =>
      prevClass.includes("bg-gray-100") ? "bg-slate-800" : "bg-gray-100"
    );
  };

  const addToOrder = (food) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === food.title);
      if (existingItem) {
        return prevItems.map((item) =>
          item.title === food.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...food, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (title) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (title) => {
    setOrderItems((prevItems) => {
      // Decrease the quantity
      const updatedItems = prevItems.map((item) =>
        item.title === title && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      // Remove the item if its quantity is 0
      return updatedItems.filter((item) => item.quantity > 0);
    });
  };
  return (
    <div className={`px-10 ${appBg} min-h-screen`}>
      <div className="">
        <RiMoonClearFill
          onClick={toggleStyle}
          className={`text-2xl ${colorBlack} m-auto hover:opacity-70 duration-200 cursor-pointer`}
        />
        <div className="flex flex-row items-baseline gap-10 justify-center">
          <div className="flex flex-col ">
            <Navbar setCategory={setCategory} />
            <Menu
              addToOrder={addToOrder}
              category={category}
              colorBlack={colorBlack}
              borderGray={borderGray}
            />
          </div>
          <div className="flex flex-col sticky top-[55px]">
            <OrderList
              orderItems={orderItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              borderGray={borderGray}
              appBg={appBg}
              bg_gray_100={bg_gray_100}
              colorBlack={colorBlack}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
