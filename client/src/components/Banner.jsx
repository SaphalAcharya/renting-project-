import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-linear-to-r from-[#0558FE] to-[#A9cfff] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
      <div className="text-white">
        <h2 className="text-3xl font-medium">Do you own a luxury car ??</h2>
        <p className="mt-2">
          Monetize your vehicle and earn extra income by listing it on our
          platform.
        </p>
        <p className="max-w-130">
          We take care of insurance ,driver verification and secure payment- so
          you can earn passive income , stress-free!
        </p>

        <button className="px-6 py-2 bg-gray-900 hover:bg-blue-600 hover:scale-105 transition-all duration-300 text-white rounded-lg text-sm mt-4 cursor-pointer shadow-md hover:shadow-lg">
  List your car
</button>
      </div>
      <img
        src={assets.banner_car_image}
        alt="Banner_Car"
        className="max-h-45 mt-10"
      />
    </div>
  );
};

export default Banner;
