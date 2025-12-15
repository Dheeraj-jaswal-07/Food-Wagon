import Food1 from "../assets/food_1.png";
import Food2 from "../assets/food_2.png";
import Food3 from "../assets/food_3.png";
import Food4 from "../assets/food_4.png";
import Food5 from "../assets/food_5.png";
import Left from "../assets/left.svg";
import Right from "../assets/right.svg";
import { icon } from "../assets/icons";

const Popular = () => {
  const cardData = [
    {
      food: Food1,
      title: "Cheese Burger",
      location: "Burger Arena",
      price: "$3.88",
      label: "Order Now",
    },
    {
      food: Food2,
      title: "Toffe’s Cake",
      location: "Top Sticks",
      price: "$4.00",
      label: "Order Now",
    },
    {
      food: Food3,
      title: "Dancake",
      location: "Cake World",
      price: "$1.99",
      label: "Order Now",
    },
    {
      food: Food4,
      title: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: "$3.00",
      label: "Order Now",
    },
    {
      food: Food5,
      title: "Thai  Soup",
      location: "Foody man",
      price: "$2.79",
      label: "Order Now",
    },
  ];
  return (
    <div className="w-full relative">
      <img className="hidden transition-transform overflow-hidden  duration-300 ease-in-out
             hover:scale-130  cursor-pointer hero_2:block hero_3:absolute hero_3:left-0 hero_3:h-25 hero_3:top-1/2"  src={Left} />
      <div className="w-container-2 mx-auto">
        <div className="my-20 cursor-default">
          <div className="text-center">
            <p className="text-header font-Source-sans-pro font-bold text-[43px]">
              Popular Items
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid hero_3:grid-cols-3 hero:grid-cols-5 col_1:grid-cols-2   gap-5 mt-15">
              {cardData.map((item, i) => (
                <div key={i} className="transition-transform duration-300 ease-in-out
             hover:scale-110 ">
                  <img className="rounded-xl" src={item.food} alt="" />
                  <div className=" mt-3 font-Source-sans-pro">
                    <p className="font-bold text-secondary mb-1.5">
                      {item.title}
                    </p>
                    <p className=" text-primary mb-1.5 flex gap-1 items-center">
                      {icon}
                      {item.location}
                    </p>
                    <p className="text-header font-bold mb-3 text-xl">
                      {item.price}
                    </p>

                    <button className="font-bold rounded-lg w-full px-16 py-3.5  bg-warning text-white cursor-pointer">
                      {item.label}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
            <img className="hidden transition-transform duration-300 ease-in-out
             hover:scale-130  cursor-pointer hero_2:block hero_3:absolute hero_3:right-0 hero_3:h-25 hero_3:top-1/2"  src={Right} />
    </div>
  );
};

export default Popular;
