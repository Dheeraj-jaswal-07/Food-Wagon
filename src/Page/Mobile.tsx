import App_Bg from "../assets/app_bg.png";
import { apple, appleLogo, google, googlePlay } from "../assets/icons";
import MobileImg from "../assets/mobile.png";
const Mobile = () => {
  return (
    <div className="w-full relative bg-[linear-gradient(261.24deg,#FFAE00_63.85%,#FF8A00_111.94%)] ">
      <div
        className="w-full h-full cursor-default "
        style={{
          backgroundImage: `url(${App_Bg})`,
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="w-container-2 mx-auto relative">
          <div className="right flex flex-col-reverse mobile:flex-row gap-10 justify-center items-center text-center mobile:text-start ">
            <div className="mobile:w-1/2 w-100">
              {" "}
              <img className="" src={MobileImg} alt="" />
            </div>
            <div className="flex mobile:w-1/2 w-full justify-center items-center flex-col ">
              <p className="font-bold font-Source-sans-pro text-5xl col_1:text-[68px] bg-[linear-gradient(92.84deg,#FB3C00_-47.72%,#FFB800_136.81%)] bg-clip-text text-transparent leading-15">
                Install the app
              </p>
              <p className="font-Open-sans text-[#827E7E] pt-2 col_1:pt-5 ">
                It's never been easier to order food. Look for the <br /> finest
                discounts and you'll be lost in a world of <br /> delectable food.
              </p>
              <div className="flex cursor-pointer font-Source-sans-pro mobile:flex-row flex-col  gap-3 py-10">
                <div className="flex w-[202px]  bg-white text-white gap-2 justify-center items-center rounded-lg">
                  {googlePlay}
                  <div className="flex-col">
                    <p className="text-[#616161] uppercase">Get It On</p>
                    {google}
                  </div>
                </div>
                <div className="flex px-4 py-1.5   bg-white text-white gap-2 justify-center items-center rounded-lg">
                  {appleLogo}
                  <div className="flex-col">
                    <p className="text-[#616161] text-base">Download on the</p>
                    {apple}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
