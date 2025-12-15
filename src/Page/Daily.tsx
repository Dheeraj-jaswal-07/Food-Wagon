import discount from "../assets/discount.svg";
import map from "../assets/map2.svg";
import speed from "../assets/speed2.svg";
import HR from "../assets/HR.svg";
const Daily = () => {
  const cardData = [
    { img: discount, hr: HR, label: "Daily Discounts" },
    { img: map, hr: HR, label: "Live Tracing" },
    { img: speed, label: "Quick Delivery" },
  ];
  return (
    <div className="w-full cursor-default bg-[#FEEFD0]">
      <div className="w-container-2 mx-auto ">
        <div className="py-20">
          <div
            className="flex flex-wrap daily:flex-nowrap  justify-center gap-10 shadow-[0px_27px_82px_0px_#FFAE0047,0px_14px_15px_0px_#FFAE0003]
   rounded-3xl py-10 px-5 bg-white"
          >
            {cardData.map((item, i) => (
              <div key={i} className="flex gap-7 justify-center items-center">
                <img className="w-20 " src={item.img} alt="" />
                <p className="font-Source-sans-pro text-xl col_1:text-[35px] font-bold bg-[linear-gradient(92.84deg,#FB3C00_-47.72%,#FFB800_136.81%)] bg-clip-text text-transparent">
                  {item.label}
                </p>
                <img className="hidden daily_2:block" src={item.hr} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
