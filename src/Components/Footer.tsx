import { footRight, footSymbol, mail, SOCIAL } from "../assets/icons";

const Footer = () => {
  const footerItems = [
    { title: "San Francisco" },
    { title: "Miami" },
    { title: "San Diego" },
    { title: "East Bay" },
    { title: "Long Beach" },
    { title: "Los Angeles" },
    { title: "Washington DC" },
    { title: "Seattle" },
    { title: "Portland" },
    { title: "Nashville" },
    { title: "New York City" },
    { title: "Orange County" },
    { title: "Atlanta" },
    { title: "Charlotte" },
    { title: "Denver" },
    { title: "Chicago" },
    { title: "Phoenix" },
    { title: "Las Vegas" },
    { title: "Sacramento" },
    { title: "Oklahoma City" },
    { title: "Columbus" },
    { title: "New Mexico" },
    { title: "Albuquerque" },
    { title: "Sacramento" },
    { title: "New Orleans" },
  ];

  const footerLinks = [
    {
      title: "Company",
      items: ["About us", "Team", "Careers", "Blog"],
    },
    {
      title: "Contact",
      items: ["Help & Support", "Partner with us", "Ride with us"],
    },
    {
      title: "Legal",
      items: [
        "Terms & Conditions",
        "Refund & Cancellation",
        "Privacy Policy",
        "Cookie Policy",
      ],
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-header">
        <div className="w-container mx-auto text-white">
          <div className="py-20 text-center city:text-start">
            <p className="font-Source-sans-pro cursor-default  font-bold text-[22px]">
              Our Top Cities
            </p>
            <div className="mt-10 grid grid-cols-2 cursor-default  city:grid-cols-5 city:gap-x-10 city:gap-y-1 ">
              {footerItems.map((item, i) => (
                <div key={i}>
                  <p className="my-2 ">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="hr py-15">
              <hr className="border border-secondary" />
            </div>

            <div className="flex footer:flex-row flex-col justify-center items-center  footer:justify-between ">
              <div className="grid  footer_1:grid-cols-3 ">
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <p className="text-white font-bold cursor-default  text-[20px] font-Source-sans-pro pt-10 footer:pt-0 pb-3">
                      {section.title}
                    </p>

                    <ul className="flex flex-col gap-2 pt-4">
                      {section.items.map((link, i) => (
                        <li
                          key={i}
                          className="text-[#E0E0E0] hover:text-[#FF8A00] cursor-pointer font-open-sans"
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex flex-col pt-15 cursor-default  footer:items-start items-center footer:mt-0 flex-wrap gap-7">
                <p className="font-SourceSans  font-bold text-[#F5F5F5]">
                  Follow Us
                </p>
                <span className="cursor-default ">{SOCIAL}</span>

                <p className="font-SourceSans font-bold text-[#BBBBBB]">
                  Receive exclusive offers in your mailbox
                </p>
                <div className="flex flex-col footer_1:flex-row gap-2 ">
                  <div className="flex  items-center gap-3 bg-secondary p-2 rounded-lg shadow-lg w-full max-w-[400px]">
                    {/* Email Icon */}
                    {mail}

                    {/* Email Input */}
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 outline-none text-[#ADADAD] font-open-sans bg-secondary"
                    />

                    {/* Submit Button */}
                  </div>
                  <button className="bg-linear-to-r from-[#FFB800] to-[#FF8A00] cursor-pointer  text-white font-semibold px-4 py-2 rounded-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="hr pt-15">
              <hr className="border border-secondary" />
              <div className="flex cursor-default flex-col footer:flex-row footer:justify-between pt-2">
                <p className="flex justify-center items-center gap-2">
                  All rights Reserved{footSymbol}{" "}
                  <span className="font-bold font-Open-sans">
                    Your Company, 2021
                  </span>
                </p>
                <p className="flex font-Open-sans font-bold justify-center items-center gap-2">
                  {footRight}Themewagon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
