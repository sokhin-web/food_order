import { useState } from "react";
import Navbar from "./components/Navbar";
import OrderList from "./components/OrderList";
import Menu from "./components/Menu";
import Logo from "./components/Logo";

function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [category, setCategory] = useState("All"); // Default to All
  const [appBg, setAppBg] = useState("bg-white");
  const [colorBlack, setColorBlack] = useState("text-black");
  const [borderGray, setBorderGray] = useState("border-gray-300");
  const [bg_gray_100, setBg_gray_100] = useState("bg-gray-100");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

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
    <div className={`px-10 ${appBg} min-h-screen phone:px-2`}>
      <div className="">
        <Logo
          appBg={appBg}
          colorBlack={colorBlack}
          handlePopupToggle={handlePopupToggle}
          toggleStyle={toggleStyle}
        />

        <div className="flex flex-row items-baseline justify-center ">
          <div className="flex flex-col m-auto">
            <Navbar setCategory={setCategory} />
            <Menu
              addToOrder={addToOrder}
              category={category}
              colorBlack={colorBlack}
              borderGray={borderGray}
            />
          </div>
          <div className="flex flex-col sticky top-[80px] tablet:absolute phone:sticky right-0 phone:top-[60px] phone:hidden">
            {/* Popup for the OrderList component */}
            {isPopupVisible && (
              <div className=" bg-opacity-50 flex items-center justify-center  z-50">
                <div className=" p-5   w-fit ">
                  {/* Close Button */}
                  <button
                    className="absolute top-2  right-1 text-red-500 text-2xl font-bold"
                    onClick={handlePopupToggle}
                  >
                    &times;
                  </button>
                  {/* Render the OrderList component */}
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
            )}
          </div>
        </div>
      </div>

      {/* Popup for the OrderList only phone screen */}
      <div className=" hidden phone:relative right-0 phone:top-[60px] bg-black bg-opacity-50 phone:mt-[100px] phone:block">
        {/* Popup for the OrderList component */}
        {isPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative p-5  rounded-lg shadow-lg w-fit overflow-y-scroll">
              {/* Close Button */}
              <button
                className="absolute top-2 right-1 text-red-500 text-2xl font-bold"
                onClick={handlePopupToggle}
              >
                &times;
              </button>
              {/* Render the OrderList component */}
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
        )}
      </div>
    </div>
  );
}

export default App;
