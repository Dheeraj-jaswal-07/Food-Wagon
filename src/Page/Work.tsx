import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
const Work = () => {
  const cardData = [
    {
      img: icon1,
      title: "Select location",
      desc: "Choose the location where your food will be delivered.",
    },
    {
      img: icon2,
      title: "Choose order",
      desc: "Check over hundreds of menus to pick your favorite food",
    },
    {
      img: icon3,
      title: "Pay advanced",
      desc: "It's quick, safe, and simple. Select several methods of payment",
    },
    {
      img: icon4,
      title: "Enjoy meals",
      desc: "Food is made and delivered directly to your home.",
    },
  ];
  return (
    <div className="w-full cursor-default bg-[linear-gradient(180deg,rgba(255,206,103,0.22)_-42.47%,rgba(253,237,202,0)_100%)]">
      <div className="w-container py-15 mx-auto">
        <div className="text-center pb-10 font-bold font-Source-sans-pro text-warning text-[43px]">
          <p>How does it work</p>
        </div>
        <div>
          <div className="flex flex-wrap hero:flex-nowrap  hero:flex-row justify-center items-center hero_3:gap-15 gap-5">
            {cardData.map((item, i) => (
              <div key={i} className="flex flex-col items-center transition-transform duration-300 ease-in-out
             hover:scale-110 text-center ">
                <img className="w-fi" src={item.img} alt="" />

                <div className=""> 
                  <p className="text-title text-[22px] font-Source-sans-pro font-bold mb-3">
                    {item.title}
                  </p>
                  <p className=" font-Open-sans text-[#9E9E9E]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
