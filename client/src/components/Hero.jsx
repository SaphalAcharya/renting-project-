import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "motion/react";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const { pickupDate, setpickupDate, returnDate, setReturnDate, navigate } = useAppContext();


  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/cars?pickupLocation=${pickupLocation}&pickupDate=${pickupDate}&returnDate=${returnDate}`);
  };

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5}}
      className="flex flex-col items-center px-4 pt-20 pb-10 bg-[#f6f8fb]"
  >
      {/* Heading */}
      <motion.h1 
      initial={{y:50, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.8, delay:0.2}}
      className="text-4xl md:text-6xl font-bold text-center text-gray-900">
        Luxury Cars on Rent
      </motion.h1>

      {/* Search Form */}
      <motion.form
      initial={{scale:0.8, y:50, opacity:0}}
      animate={{scale:1,y:0, opacity:1}}
      transition={{duration:0.6, delay:0.4}}

        onSubmit={handleSearch}
        className="
          mt-12
          bg-white
          rounded-3xl
          md:rounded-full
          shadow-xl
          px-6
          py-6
          w-full
          max-w-6xl
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          
          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Pickup Location
            </label>

            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="
                mt-2
                w-full
                bg-transparent
                outline-none
                text-gray-500
                text-sm
                cursor-pointer
              "
            >
              <option value="">Please select location</option>

              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Pickup Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Pick-up Date
            </label>

            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setpickupDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="
                mt-2
                w-full
                bg-transparent
                outline-none
                text-gray-500
                text-sm
                appearance-none
                cursor-pointer
              "
            />
          </div>

          {/* Return Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Return Date
            </label>

            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={pickupDate || new Date().toISOString().split("T")[0]}
              className="
                mt-2
                w-full
                bg-transparent
                outline-none
                text-gray-500
                text-sm
                appearance-none
                cursor-pointer
              "
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="
              w-full
              md:w-auto
              bg-blue-600
              hover:bg-blue-700
              text-white
              h-14
              px-8
              rounded-full
              font-medium
              flex
              items-center
              justify-center
              gap-2
              transition-all
            "
          >
            <img
              src={assets.search_icon}
              alt="search"
              className="w-4 h-4 brightness-0 invert"
            />
            Search
          </button>
        </div>
      </motion.form>

      {/* Car Image */}
      <img
        src={assets.main_car}
        alt="car"
        className="
          mt-12
          w-full
          max-w-225
          object-contain
          drop-shadow-2xl
        "
      />
    </motion.section>
  );
};

export default Hero;