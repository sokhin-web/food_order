import Food_Card from "../Form/Food_Card";

const foodData = [
  {
    id: 1,
    name: "Desert",
    title: "Tiramizu",
    description: "Cheese, Tomato, Basil, Olive Oil",
    price: 200,
    image:
      "https://i.pinimg.com/736x/f5/e2/4e/f5e24e513d0c0fc554d7170d0a9f6a0a.jpg",
  },
  {
    id: 2,
    name: "Desert",
    title: "Tiramizu",
    description: "Cheese, Tomato, Basil, Olive Oil",
    price: 200,
    image:
      "https://i.pinimg.com/736x/f5/e2/4e/f5e24e513d0c0fc554d7170d0a9f6a0a.jpg",
  },
  {
    id: 3,
    name: "Desert",
    title: "Tiramizu",
    description: "Cheese, Tomato, Basil, Olive Oil",
    price: 200,
    image:
      "https://i.pinimg.com/736x/f5/e2/4e/f5e24e513d0c0fc554d7170d0a9f6a0a.jpg",
  },
  {
    id: 4,
    name: "Desert",
    title: "Tiramizu",
    description: "Cheese, Tomato, Basil, Olive Oil",
    price: 200,
    image:
      "https://i.pinimg.com/736x/f5/e2/4e/f5e24e513d0c0fc554d7170d0a9f6a0a.jpg",
  },
];

function DesertList() {
  return (
    <div className="mt-10 flex flex-row flex-wrap justify-center gap-5">
      {foodData.map((food) => (
        <Food_Card
          key={food.id}
          image={food.image}
          title={food.title}
          description={food.description}
          price={food.price}
        />
      ))}
    </div>
  );
}

export default DesertList;
