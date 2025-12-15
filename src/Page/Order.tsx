import { viewAll } from "../assets/icons";
import Order_Bg from "../assets/order.jpg";
const Order = () => {
  return (
    <div className="w-full mt-20">
      <div
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${Order_Bg})` }}
      >
        <div className="flex cursor-default justify-center items-center text-center ">
          <div className="py-15 flex flex-col justify-center items-center ">
            <p className="text-white hero:leading-15 leading-10 px-20 pb-5 font-Source-sans-pro text-3xl hero_2:text-[50px] font-black">
              Are you ready to order with <br /> the best deals?
            </p>
            <div
              className="flex w-fit  px-10 py-3  bg-[linear-gradient(93.41deg,#F17228_-5.63%,#F15E28_100.8%)] text-white gap-2 justify-center items-center rounded-lg"
            >
              <button className="font-bold font-Source-sans-pro cursor-pointer uppercase">
                Proceed to Order
              </button>
              {viewAll}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
