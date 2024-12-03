/* eslint-disable react/prop-types */
import Food_Card from "../Form/Food_Card";

const foodData = [
  {
    name: "Pizza",
    pizzaData: [
      {
        id: 1,
        name: "Pizza",
        title: "Magarita ",
        description: "Cheese, Tomato, Basil, Olive Oil",
        price: 10,
        image:
          "https://i.pinimg.com/736x/26/c6/4b/26c64bef44546cdc05bc2233168f32ac.jpg",
      },
      {
        id: 2,
        name: "Pizza",
        title: "Cheese ",
        description: "Cheese, Tomato, Basil, Olive Oil",
        price: 10,
        image:
          "https://i.pinimg.com/736x/26/c6/4b/26c64bef44546cdc05bc2233168f32ac.jpg",
      },
      {
        id: 3,
        name: "Pizza",
        title: "Hawaiian",
        description: "Cheese, Tomato, Basil, Olive Oil",
        price: 5,
        image:
          "https://i.pinimg.com/736x/26/c6/4b/26c64bef44546cdc05bc2233168f32ac.jpg",
      },
      {
        id: 4,
        name: "Pizza",
        title: "Pepperoni",
        description: "Cheese, Tomato, Basil, Olive Oil",
        price: 5,
        image:
          "https://i.pinimg.com/736x/26/c6/4b/26c64bef44546cdc05bc2233168f32ac.jpg",
      },
    ],
  },
  {
    name: "Salad",
    saladData: [
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
        description:
          "Lettuce, tomatoes, cucumber, carrots, vinaigrette dressing",
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
    ],
  },
];

function PizzaList({ addToOrder }) {
  return (
    <div className="mt-10 flex flex-row flex-wrap justify-center gap-5">
      {/* Loop through all categories */}
      {foodData.map((category) =>
        category[`${category.name.toLowerCase()}Data`].map((item) => (
          <Food_Card
            key={item.id + category.name}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            onAddToOrder={addToOrder}
          />
        ))
      )}
      {/*foodData.map((food) => (
        <Food_Card
          key={food.id}
          image={food.image}
          title={food.title}
          description={food.description}
          price={food.price}
          onAddToOrder={addToOrder}
        />
      ))*/}
    </div>
  );
}

export default PizzaList;
