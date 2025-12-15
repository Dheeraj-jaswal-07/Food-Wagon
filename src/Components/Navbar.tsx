import Logo from "../assets/Logo.svg";
import Map from "../assets/map.svg";
import Search from "../assets/Search.svg";
import User from "../assets/user.svg";
const Navbar = () => {
  return (
    <div className="w-container mx-auto ">
      <div className="flex justify-between items-center my-2.5">
        {/* Logo */}
        <div className="flex shrink">
          <img src={Logo} alt="Logo" className="h-8 md:h-auto" />
        </div>

        {/* Location (hidden on small screens) */}
        <div className="hidden lg:flex items-center justify-center cursor-default text-secondary gap-2">
          <p className="font-Source-sans-pro font-bold">Deliver to:</p>
          <img src={Map} alt="" />
          <p className="font-Open-sans">Current Location</p>
          <p className="font-Open-sans font-bold truncate max-w-[260px]">
            Mohammadpur Bus Stand, Dhaka
          </p>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-5 font-Source-sans-pro font-bold text-secondary">
          {/* Search */}
          <div className="flex items-center gap-1 cursor-pointer">
            <img src={Search} alt="" className="w-5 h-5 shrink-0" />
            <p className="hidden md:block">Search Food</p>
          </div>

          {/* Login */}
          <div
            className="flex px-4 sm:px-6 py-2 sm:py-3 gap-2 justify-center items-center 
             text-primary rounded-lg shadow-lg cursor-pointer
             transition-transform duration-300 ease-out
             hover:scale-110"
          >
            <img src={User} alt="" className="w-5 h-5 shrink-0" />
            <button className="hidden sm:block cursor-pointer font-bold shadow-nav-login">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
