import { viewAll_2 } from "../assets/icons";
import Sider from "../assets/sider.svg";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'

const Search = () => {
    const cardData = [
        {img:img1, name:'Pizza'},
        {img:img2, name:'Burger'},
        {img:img3, name:'Noodles'},
        {img:img4, name:'Sub-sandiwch'},
        {img:img5, name:'Chowmein'},
        {img:img6, name:'Steak'},
    ]
  return (
    <div className="w-full cursor-default bg-[#FEFAF1]">
      <div className="w-container py-10 mx-auto">
        <div className="row  flex justify-between items-center">
          <div>
            <p className="font-Source-sans-pro font-bold text-[43px]">
              Search By Food
            </p>
          </div>
          <div className="flex justify-center  items-center">
            <p className="flex gap-4              transition-transform duration-300 ease-out
             hover:scale-110 cursor-pointer items-center text-primary justify-center font-Source-sans-pro font-bold">
              View All {viewAll_2}
            </p>

            <img className="pt-7 cursor-pointer     hidden hero_3:block" src={Sider} alt="" />
          </div>
        </div>

          <div className="grid pt-10 hero_3:grid-cols-6 grid-cols-3 gap-5  text-center">
            {cardData.map((item, i) => (
              <div key={i} className="transition-transform duration-300 ease-out
             hover:scale-110">
                <img
                  className=" rounded-full"
                  src={item.img}
                  alt=""
                />
                <p className="py-3 font-Source-sans-pro font-bold text-[22px] text-secondary">{item.name}</p>
              </div>
            ))}
          </div>

      </div>
    </div>
  );
};

export default Search;
