/* eslint-disable react/prop-types */
function Food_Card({
  image,
  title,
  description,
  price,
  onAddToOrder,
  colorBlack,
  borderGray,
}) {
  return (
    <div
      className={`flex flex-col  gap-1 py-5 px-2 rounded-md  border ${borderGray} w-[250px] hover:translate-y-[-5px] duration-200`}
    >
      <img className="w-[200px] m-auto rounded-md" src={image} />
      <h3 className={`text-xl font-bold ${colorBlack}`}>{title}</h3>
      <p className="text-md font-semibold text-gray-500 text-wrap">
        {description}
      </p>
      <div className="flex flex-row justify-between items-center mt-5">
        <p className="font-bold text-xl text-teal-500 ">{price}$</p>

        <button
          onClick={() => onAddToOrder({ title, description, price, image })}
          className="bg-teal-500 hover:bg-teal-600 text-white   py-1 px-4 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Food_Card;
