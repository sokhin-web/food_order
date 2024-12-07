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
      className={`flex flex-col  gap-1 py-5 px-2 rounded-md  border ${borderGray} w-[250px] phone:w-[150px] phone:gap-0 phone:px-1 phone:py-2 hover:translate-y-[-5px] duration-200`}
    >
      <img
        className="w-[200px] m-auto rounded-md phone:w-[150px]"
        src={image}
      />
      <h3 className={`text-xl font-bold phone:text-sm ${colorBlack}`}>
        {title}
      </h3>
      <p className="text-md font-semibold text-gray-500 text-wrap phone:text-xs">
        {description}
      </p>
      <div className="flex flex-row justify-between items-center mt-5 phone:mt-2">
        <p className="font-bold text-xl text-teal-500 phone:text-sm">
          {price}$
        </p>

        <button
          onClick={() => onAddToOrder({ title, description, price, image })}
          className="bg-teal-500 hover:bg-teal-600 text-white   py-1 px-4 rounded phone:py-0.5 phone:px-2 phone:text-xs"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Food_Card;
