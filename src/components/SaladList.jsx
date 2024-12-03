/* eslint-disable react/prop-types */
import Food_Card from "../Form/Food_Card";

const foodData = [
  {
    id: 1,
    name: "Salad",
    title: "Classic Caesar",
    description: "Romaine , Parmesan , croutons, Caesar dressing",
    price: 8,
    image:
      "https://i.pinimg.com/736x/cf/f9/9e/cff99e23104df45aa2c8ea1e52370fe4.jpg",
  },
  {
    id: 2,
    name: "Salad",
    title: "Authentic Greek",
    description: "Cucumber, tomatoes, red onion, feta, olives",
    price: 7,
    image:
      "https://i.pinimg.com/736x/cf/f9/9e/cff99e23104df45aa2c8ea1e52370fe4.jpg",
  },
  {
    id: 3,
    name: "Salad",
    title: "Fresh Garden Mix",
    description: "Lettuce, tomatoes, cucumber, carrots, vinaigrette dressing",
    price: 6,
    image:
      "https://i.pinimg.com/736x/cf/f9/9e/cff99e23104df45aa2c8ea1e52370fe4.jpg",
  },
  {
    id: 4,
    name: "Salad",
    title: "Hearty Cobb",
    description: "Romaine , grilled, bacon, avocado, blue cheese",
    price: 10,
    image:
      "https://i.pinimg.com/736x/cf/f9/9e/cff99e23104df45aa2c8ea1e52370fe4.jpg",
  },
];

function SaladList({ addToOrder }) {
  return (
    <div className="mt-10 flex flex-row flex-wrap justify-center gap-5">
      {foodData.map((food) => (
        <Food_Card
          key={food.id}
          image={food.image}
          title={food.title}
          description={food.description}
          price={food.price}
          onAddToOrder={addToOrder}
        />
      ))}
    </div>
  );
}

export default SaladList;
