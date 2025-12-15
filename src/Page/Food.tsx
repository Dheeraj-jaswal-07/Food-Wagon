import Food1 from "../assets/food1.png";
import Food2 from "../assets/food2.png";
import Food3 from "../assets/food3.png";
import Food4 from "../assets/food4.png";
import Dis1 from "../assets/dis1.png";
import Dis2 from "../assets/dis2.png";
import Dis3 from "../assets/dis3.png";
import Dis4 from "../assets/dis4.png";
const Food = () => {
  const cardData = [
    { food: Food1, disc: Dis1, title: "Greys Vage", label: "6 Days Remaining" },
    { food: Food2, disc: Dis2, title: "Greys Vage", label: "7 Days Remaining" },
    { food: Food3, disc: Dis3, title: "Greys Vage", label: "8 Days Remaining" },
    { food: Food4, disc: Dis4, title: "Greys Vage", label: "9 Days Remaining" },
  ];
  return (
    <div className="w-container mx-auto">
      <div className="flex justify-center my-20">
        <div className=" grid hero:grid-cols-4 grid-cols-1 col_1:grid-cols-2 gap-5">
          {cardData.map((item, i) => (
            <div key={i}>
              <div className="relative">
                <img className="rounded-xl" src={item.food} alt="" />
                <div className="absolute  bottom-0">
                  <img className="" src={item.disc} alt="" />
                </div>
              </div>
              <div className="font-bold mt-5 cursor-default">
                <p className="text-secondary mb-3">{item.title}</p>
 
                  <button className=" rounded-lg  px-4 py-2  bg-[#F172281A] text-warning cursor-pointer">
                    {item.label}
                  </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
