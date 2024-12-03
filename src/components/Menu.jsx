/* eslint-disable react/prop-types */

import Food_Card from "../Form/Food_Card";
import spa1 from "../assets/spa1.png";
import pizza1 from "../assets/pizza1.png";
import desert1 from "../assets/desert1.png";
import salad1 from "../assets/salad1.png";
import drink1 from "../assets/drink1.png";

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
        image: pizza1,
      },
      {
        id: 2,
        name: "Pizza",
        title: "Cheese ",
        description: "Cheese, Tomato, Basil, Olive Oil",
        price: 10,
        image: pizza1,
      },
      {
        id: 3,
        name: "Pizza",
        title: "Hawaiian",
        description: "Cheese, Tomato, Basil, Olive Oil",
        price: 5,
        image: pizza1,
      },
      {
        id: 4,
        name: "Pizza",
        title: "Pepperoni",
        description: "Cheese, Tomato, Basil, Olive Oil",
        price: 5,
        image: pizza1,
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
        image: salad1,
      },
      {
        id: 2,
        name: "Salad",
        title: "Authentic Greek",
        description: "Cucumber, tomatoes, red onion, feta, olives",
        price: 7,
        image: salad1,
      },
      {
        id: 3,
        name: "Salad",
        title: "Fresh Garden Mix",
        description:
          "Lettuce, tomatoes, cucumber, carrots, vinaigrette dressing",
        price: 6,
        image: salad1,
      },
      {
        id: 4,
        name: "Salad",
        title: "Hearty Cobb",
        description: "Romaine , grilled, bacon, avocado, blue cheese",
        price: 10,
        image: salad1,
      },
    ],
  },
  {
    name: "Pasta",
    pastaData: [
      {
        id: 1,
        name: "Spaghetti Bolognese",
        title: "Classic Bolognese",
        description:
          "Spaghetti pasta served with a rich, slow-cooked beef and tomato sauce.",
        price: 12,
        image: spa1,
      },
      {
        id: 2,
        name: "Penne Alfredo",
        title: "Creamy Alfredo",
        description:
          "Penne pasta in a creamy Alfredo sauce with Parmesan cheese and garlic.",
        price: 11,
        image: spa1,
      },
      {
        id: 3,
        name: "Lasagna",
        title: "Classic Lasagna",
        description:
          "Layers of pasta, rich meat sauce, ricotta, and melted mozzarella cheese.",
        price: 14,
        image: spa1,
      },
      {
        id: 4,
        name: "Pesto Pasta",
        title: "Basil Pesto",
        description:
          "Pasta tossed in fresh basil pesto, topped with cherry tomatoes and pine nuts.",
        price: 10,
        image: spa1,
      },
    ],
  },
  {
    name: "Dessert",
    dessertData: [
      {
        id: 1,
        name: "Dessert",
        title: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center",
        price: 7,
        image: desert1,
      },
      {
        id: 2,
        name: "Dessert",
        title: "Tiramisu",
        description:
          "Layers of mascarpone, espresso-soaked ladyfingers, cocoa powder",
        price: 8,
        image: desert1,
      },
      {
        id: 3,
        name: "Dessert",
        title: "Cheesecake",
        description: "Classic creamy cheesecake with a graham cracker crust",
        price: 6,
        image: desert1,
      },
      {
        id: 4,
        name: "Dessert",
        title: "Ice Cream Sundae",
        description:
          "Vanilla ice cream topped with chocolate sauce, nuts, and a cherry",
        price: 5,
        image: desert1,
      },
    ],
  },
  {
    name: "Drink",
    drinkData: [
      {
        id: 1,
        name: "Drink",
        title: "Fresh Lemonade",
        description:
          "Refreshing lemonade made with fresh lemons and a hint of mint",
        price: 4,
        image: drink1,
      },
      {
        id: 2,
        name: "Drink",
        title: "Iced Coffee",
        description: "Chilled coffee served with ice and a splash of milk",
        price: 5,
        image: drink1,
      },
      {
        id: 3,
        name: "Drink",
        title: "Mango Smoothie",
        description: "Creamy mango smoothie blended with yogurt and honey",
        price: 6,
        image: drink1,
      },
      {
        id: 4,
        name: "Drink",
        title: "Sparkling Water",
        description: "Bubbly sparkling water with a slice of lime",
        price: 3,
        image: drink1,
      },
    ],
  },
];

function Menu({ addToOrder, category, colorBlack, borderGray }) {
  const filterData = () => {
    if (category === "All") {
      return foodData.flatMap(
        (category) => category[`${category.name.toLowerCase()}Data`]
      );
    } else {
      const selectedCategory = foodData.find(
        (categoryData) => categoryData.name === category
      );
      return selectedCategory
        ? selectedCategory[`${category.toLowerCase()}Data`]
        : [];
    }
  };

  return (
    <div className="mt-10 flex flex-row  flex-wrap justify-center gap-5">
      {filterData().map((item) => (
        <Food_Card
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          onAddToOrder={addToOrder}
          colorBlack={colorBlack}
          borderGray={borderGray}
        />
      ))}
    </div>
  );
}

export default Menu;
