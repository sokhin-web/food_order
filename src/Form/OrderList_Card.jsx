/* eslint-disable react/prop-types */

export default function OrderList_Card({
  image,
  title,
  price,
  quantity,
  onIncrease,
  onDecrease,
  appBg,
  borderGray,
  colorBlack,
}) {
  return (
    <div className="flex flex-col mt-2">
      <div
        className={`flex flex-row  items-center  px-1 py-1 rounded-lg ${appBg} border ${borderGray}`}
      >
        <img src={image} className="w-[50px] rounded-sm" />
        <p className={`font-bold pl-2 ${colorBlack}`}>{title}</p>
        <div className="flex flex-row items-center ml-auto">
          <button
            className="text-red-500 font-extrabold text-xl"
            onClick={onDecrease}
          >
            -
          </button>
          <p className={`px-1 ${colorBlack}`}>x{quantity}</p>
          <button
            className="text-teal-500 font-extrabold text-xl"
            onClick={onIncrease}
          >
            +
          </button>
        </div>

        <p className="font-bold text-teal-500  ml-auto">{price * quantity}$</p>
      </div>
    </div>
  );
}
