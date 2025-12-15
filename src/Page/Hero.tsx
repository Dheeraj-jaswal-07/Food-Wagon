import Hero_Bg from "../assets/herobg.png";
import Hero_img from "../assets/hero_img.png";
import Bike from "../assets/bike.svg";
import Bag from "../assets/pickup.svg";
import Icon from "../assets/input.svg";
import Btn from "../assets/hero_btn.svg";
import { useState } from "react";
const Hero = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full ">
      <div
        className=" w-full"
        style={{
          backgroundImage: `url(${Hero_Bg})`,
          // backgroundRepeat:'no-repeat'
        }}
      >
        <div className="w-container flex hero_3:flex-row flex-col relative  mx-auto">
          <div className="flex flex-col cursor-default hero_3:text-start text-center w-auto hero_3:w-1/2 hero:w-[60%] hero_2:py-24 py-20 font-Source-sans-pro ">
            <p className="font-bold text-7xl md:text-[82px] text-white  sm:leading-22">
              Are you starving?
            </p>
            <p className="text-secondary text-lg sm:text-xl pt-3 hero:pt-3">
              Within a few clicks, find meals that are accessible near you
            </p>
            <div className="bg-white   mt-7 rounded-xl">
              <div className="flex font-Source-sans-pro mx-5 my-5 gap-5  ">
                <div
                  onClick={() => setActive(!active)}
                  className="flex px-6 py-1.5 bg-[#F172281A] gap-2 
             justify-center items-center rounded-lg cursor-pointer
             overflow-hidden w-30"
                >
                  {/* Bike Image */}
                  <img
                    src={Bike}
                    alt=""
                    className={`
      transition-transform duration-500 ease-in-out
      ${active ? "translate-x-40" : "translate-x-0"}
    `}
                  />

                  {/* Text */}
                  <span
                    className={`
      font-bold text-warning transition-all duration-2000
      ${active ? "opacity-100" : "opacity-100 w-auto"}
    `}
                  >{active ? "Coming..." : "Delivery"}
                  </span>
                </div>
                <div className="flex gap-2 cursor-pointer justify-center items-center  text-grey ">
                  <img className="" src={Bag} alt="" />
                  <button className=" cursor-pointer font-bold">Pickup</button>
                </div>
              </div>
              <div>
                <hr className="opacity-10" />
              </div>
              <div className=" relative gap-2 my-4.5 flex flex-col hero_2:flex-row mx-5">
                <img className="absolute top-2.5 left-4.5" src={Icon} alt="" />
                <input
                  type="text"
                  className="bg-[#F5F5F5] text-lg h-12 w-auto hero:w-125 text-[#39425D] rounded-md focus:outline-none  font-Open-sans px-15  "
                  placeholder="Enter Your Address"
                />
                <div className="flex px-7 py-3 hero_2:py-1.5 hero_2:mt-0 mt-3  bg-[#F65900] gap-2 justify-center items-center rounded-lg              transition-transform duration-300 ease-out
             hover:scale-110" >
                  <img className="cursor-pointer" src={Btn} alt="" />
                  <button className="font-bold text-white cursor-pointer">
                    Find Food
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero:w-[40%] w-auto flex justify-center items-center">
            <img
              className="hero_3:absolute  right-0 bottom-0  w-100 object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
              src={Hero_img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
