/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import OrderList_Card from "../Form/OrderList_Card";

function OrderList({
  orderItems,
  increaseQuantity,
  decreaseQuantity,
  borderGray,
  appBg,
  bg_gray_100,
  colorBlack,
}) {
  const [discountPercentage, setDiscountPercentage] = useState(0); // Store discount percentage
  const [subtotal, setSubtotal] = useState(0); // Store subtotal amount
  const [saleTax, setSaleTax] = useState(0); // Store sale tax
  const [discount, setDiscount] = useState(0); // Store discount in dollars
  const taxRate = 0.1; // Example sale tax rate (8%)

  // Function to calculate subtotal, tax, and discount
  const calculateTotal = () => {
    const newSubtotal = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);

    // Calculate tax
    const newTax = newSubtotal * taxRate;
    setSaleTax(newTax);

    // Calculate discount based on the percentage entered
    const newDiscount = newSubtotal * (discountPercentage / 100);
    setDiscount(newDiscount);
  };

  useEffect(() => {
    calculateTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderItems, discountPercentage]); // Recalculate when orderItems or discountPercentage changes
  // Function to capture a screenshot of the component

  return (
    <div
      className={`px-2 py-2 rounded-md border ${borderGray} ${appBg} animate-slide_right_center `}
    >
      <div className="flex flex-row justify-between items-center px-2 py-1 bg-teal-500 text-white rounded-md cursor-pointer">
        <p>Current Order</p>
        <RiDeleteBin2Fill />
      </div>
      <div
        id="orderList"
        className="w-[300px] min-h-[200px] max-h-[60vh] overflow-y-auto pb-5"
      >
        {orderItems.map((item, index) => (
          <OrderList_Card
            key={index}
            image={item.image}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => increaseQuantity(item.title)}
            onDecrease={() => decreaseQuantity(item.title)}
            appBg={appBg}
            borderGray={borderGray}
            colorBlack={colorBlack}
          />
        ))}
      </div>
      <div className={`flex flex-col gap-2 p-2 ${bg_gray_100} rounded-md`}>
        <div>
          <div className="flex flex-row justify-between items-center text-sm text-gray-500">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between items-center text-sm text-gray-500">
            <p>Discount</p>
            <p>${discount.toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between items-center text-sm text-gray-500">
            <p>Total Sale Tax</p>
            <p>${saleTax.toFixed(2)}</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center text-md font-bold text-black">
            <p className={`${colorBlack}`}>Total payment</p>
            <p className={`${colorBlack}`}>
              ${(subtotal - discount + saleTax).toFixed(2)}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center text-md text-gray-500 ">
            <p>Discount %</p>
            <div className="flex flex-row items-center gap-1 ">
              <input
                type="text"
                value={discountPercentage}
                placeholder="%"
                onChange={(e) => setDiscountPercentage(Number(e.target.value))}
                className={`w-[50px] text-center rounded-md ${appBg}`}
                min="" // Optional: Prevent negative values
              />
              <p className="font-extrabold">%</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-5 px-2 py-1 text-center bg-teal-500 text-white rounded-md cursor-pointer"
        onClick={() => window.print()} // Call the function to print the order list
      >
        <p>Confirm to payment and print</p>
      </div>
    </div>
  );
}

export default OrderList;
