import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";
import feature6 from "../assets/feature6.png";
import feature7 from "../assets/feature7.png";
import feature8 from "../assets/feature8.png";
import small1 from "../assets/small1.png";
import small2 from "../assets/small2.svg";
import small3 from "../assets/small3.svg";
import small4 from "../assets/small4.svg";
import small5 from "../assets/small5.svg";
import small6 from "../assets/small6.svg";
import small7 from "../assets/small7.svg";
import small8 from "../assets/small8.svg";
import { disc, star, speed1, viewAll } from "../assets/icons";
const Featured = () => {
  const cardData = [
    {
      food: feature1,
      smallImg: small1,
      title: "Food World",
      rating: "46",
      off: "20% off",
      speed: "Fast",
      label: "Opens tomorrow ",
      btn: "bg-[#F172281A]",
      text: "text-warning ",
    },
    {
      food: feature2,
      smallImg: small2,
      title: "Food World",
      rating: "46",
      off: "20% off",
      speed: "Fast",
      label: "Opens tomorrow ",
      btn: "bg-[#F172281A]",
      text: "text-warning ",
    },
    {
      food: feature3,
      smallImg: small3,
      title: "Food World",
      rating: "46",
      off: "20% off",
      speed: "Fast",
      label: "Opens ",
      btn: "bg-btn-bg",
      text: "text-success ",
    },
    {
      food: feature4,
      smallImg: small4,
      title: "Food World",
      rating: "46",
      off: "20% off",
      speed: "Fast",
      label: "Opens ",
      btn: "bg-btn-bg",
      text: "text-success ",
    },
    {
      food: feature5,
      smallImg: small5,
      title: "Food World",
      rating: "46",
      off: "20% off",
      speed: "Fast",
      label: "Opens ",
      btn: "bg-btn-bg",
      text: "text-success ",
    },
    {
      food: feature6,
      smallImg: small6,
      title: "Food World",
      rating: "46",
      off: "20% off",
      speed: "Fast",
      label: "Opens ",
      btn: "bg-btn-bg",
      text: "text-success ",
    },
    {
      food: feature7,
      smallImg: small7,
      title: "Food World",
      rating: "46",
      off: "20% off",
      speed: "Fast",
      label: "Opens ",
      btn: "bg-btn-bg",
      text: "text-success ",
    },
    {
      food: feature8,
      smallImg: small8,
      title: "Food World",
      rating: "46",
      off: "20% off",
      speed: "Fast",
      label: "Opens ",
      btn: "bg-btn-bg",
      text: "text-success ",
    },
  ];
  return (
    <div className="w-container mx-auto">
      <div className="my-20 cursor-default  ">
        <div className="text-center">
          <p className="text-header font-Source-sans-pro font-bold text-[43px]">
            Featured Items
          </p>
        </div>
        <div className="flex justify-center items-center">

        <div className="group grid col_1:grid-cols-2 col_2:grid-cols-3 hero:grid-cols-4 hero:grid-rows-2 gap-x-5 gap-y-15 mt-15">
          {cardData.map((item, i) => (
            <div key={i}>
              <div className="relative">
                <img className="rounded-xl" src={item.food} alt="" />
                <div className="absolute font-Source-sans-pro font-bold top-0 flex gap-3 p-4">
                  <div className="flex px-4 py-1.5   bg-warning text-white gap-2 justify-center items-center rounded-lg">
                    {disc}
                    <button className="font-bold cursor-pointer">
                      {item.off}
                    </button>
                  </div>
                  <div className="flex px-4 py-1.5   bg-primary text-white gap-2 justify-center items-center rounded-lg">
                    {speed1}
                    <button className="font-bold  cursor-pointer">
                      {item.speed}
                    </button>
                  </div>
                </div>
              </div>

              <div className="font-Source-sans-pro">
                <div className="py-4 flex gap-4">
                  <img src={item.smallImg} alt="" />
                  <div>
                    <p className="font-bold text-secondary">{item.title}</p>
                    <p className=" text-primary flex gap-1 items-center">
                      {star}
                      {item.rating}
                    </p>
                  </div>
                </div>

                <button
                  className={`font-bold group-hover:transition-transform duration-300 ease-out
             hover:scale-110 rounded-2xl ${item.btn} ${item.text}  px-4 py-1.5  cursor-pointer`}
                >
                  {item.label}
                </button>
              </div>
            </div>
          ))}
        </div>
                  
        </div>
        <div className="flex justify-center items-center mt-15">
          <div className="flex              transition-transform duration-300 ease-out
             hover:scale-110 px-10 py-4  w-fit  bg-primary text-white gap-2 justify-center items-center rounded-lg">
            <button className="font-bold cursor-pointer">View All</button>
            {viewAll}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
