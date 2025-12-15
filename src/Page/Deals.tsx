import deal1 from "../assets/deal1.png";
import deal2 from "../assets/deal2.png";
import deal3 from "../assets/deal3.png";
import { viewAll } from "../assets/icons";
const Deals = () => {
  return (
    <div className="w-container mx-auto">
      <div className="flex deals:flex-row cursor-default  flex-col justify-center items-center  my-25 shadow-2xl rounded-2xl">
        <div className="deals:w-[40%] w-1/2 flex justify-center items-center ">
          <div className="deals:p-10">
            <p className="text-[43px] leading-12 font-Source-sans-pro font-bold">
              Best deals{" "}
              <span className="bg-[linear-gradient(92.84deg,#FB3C00_-47.72%,#FFB800_136.81%)] bg-clip-text text-transparent">
                Crispy Sandwiches
              </span>
            </p>
            <p className="font-Open-sans font-semibold pt-4 text-[#616161B0]">
              Enjoy the large size of sandwiches. Complete perfect slice of
              sandwiches.
            </p>
            <div className="flex  px-10 py-3 deals:mt-22 mt-7    bg-[linear-gradient(92.84deg,#FFB800_-47.72%,#FF8A00_136.81%)] text-white gap-2 justify-center items-center rounded-lg">
              <button className="font-bold font-Source-sans-pro cursor-pointer uppercase">
                Proceed to Order
              </button>
              {viewAll}
            </div>
          </div>
        </div>
        <div className="deals:w-[60%] xs:w-container sm:w-[60%] md:w-[60%]  deals:my-0 my-5">
          <img className="deals:rounded-r-2xl w-fit" src={deal1} alt="" />
        </div>
      </div>
      {/* 2nd Div */}
      <div className="flex deals:flex-row cursor-default  flex-col justify-center items-center  my-25 shadow-2xl rounded-2xl">
        <div className="deals:w-[60%] xs:w-container sm:w-[60%] md:w-[60%]  deals:my-0 my-5 ">
          <img className="deals:rounded-l-2xl w-fit" src={deal2} alt="" />
        </div>
        <div className="deals:w-[40%] w-1/2 flex justify-center items-center">
          <div className="deals:p-10">
            <p className="text-[43px] leading-12 font-Source-sans-pro font-bold">
              Celebrate parties with{" "}
              <span className="bg-[linear-gradient(92.84deg,#FB3C00_-47.72%,#FFB800_136.81%)] bg-clip-text text-transparent">
                Fried Chicken
              </span>
            </p>
            <p className="font-Open-sans font-semibold pt-4 text-[#616161B0]">
              Get the best fried chicken smeared with a lip smacking lemon chili
              flavor. Check out best deals for fried chicken.
            </p>
            <div className="flex  px-10 py-3 deals:mt-16 mt-7 deals:mb-0 mb-5  w-full  bg-[linear-gradient(92.84deg,#FFB800_-47.72%,#FF8A00_136.81%)] text-white gap-2 justify-center items-center rounded-lg">
              <button className="font-bold font-Source-sans-pro cursor-pointer uppercase">
                Proceed to Order
              </button>
              {viewAll}
            </div>
          </div>
        </div>
      </div>
      {/* 3rd div */}
      <div className="flex deals:flex-row cursor-default  flex-col justify-center items-center  my-25 shadow-2xl rounded-2xl">
        <div className="deals:w-[40%] w-1/2 flex justify-center items-center">
          <div className="deals:p-10">
            <p className="text-[43px] leading-12 font-Source-sans-pro font-bold">
              Wanna eat hot & spicy{" "}
              <span className="bg-[linear-gradient(92.84deg,#FB3C00_-47.72%,#FFB800_136.81%)] bg-clip-text text-transparent">
                Pizza?
              </span>
            </p>
            <p className="font-Open-sans font-semibold pt-4 text-[#616161B0]">
              Pair up with a friend and enjoy the hot and crispy pizza pops. Try
              it with the best deals.
            </p>
            <div className="flex  px-10 py-3 deals:mt-22 mt-7 w-full  bg-[linear-gradient(92.84deg,#FFB800_-47.72%,#FF8A00_136.81%)] text-white gap-2 justify-center items-center rounded-lg">
              <button className="font-bold font-Source-sans-pro cursor-pointer uppercase">
                Proceed to Order
              </button>
              {viewAll}
            </div>
          </div>
        </div>
        <div className="deals:w-[60%] xs:w-container sm:w-[60%] md:w-[60%]  deals:my-0 my-5">
          <img className="rounded-r-2xl w-fit" src={deal3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Deals;
