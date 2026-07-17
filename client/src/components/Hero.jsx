import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

const Hero = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      pickUpLocation,
      pickupDate,
      returnDate,
    });
  };

  return (
    <section className="flex flex-col items-center px-4 pt-20 pb-10 bg-[#f6f8fb]">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900">
        Luxury Cars on Rent
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
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
              value={pickUpLocation}
              onChange={(e) => setPickUpLocation(e.target.value)}
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
              onChange={(e) => setPickupDate(e.target.value)}
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
      </form>

      {/* Car Image */}
      <img
        src={assets.main_car}
        alt="car"
        className="
          mt-12
          w-full
          max-w-[900px]
          object-contain
          drop-shadow-2xl
        "
      />
    </section>
  );
};

export default Hero;