import React from "react";
import Tittle from "./Tittle";
import { assets } from "../assets/assets";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      name: "John Doe",
      location: "New York, USA",
      image: assets.testimonial_image_1,
      content:
        "CarRental made my trip so much easier! The booking process was seamless, and the customer service was top-notch.",
      rating: 4,
    },
    {
      name: "Jane Smith",
      location: "London, UK",
      image: assets.testimonial_image_2,
      content:
        "Excellent service and amazing vehicles. The booking process was simple and stress-free.",
      rating: 5,
    },
    {
      name: "David Lee",
      location: "Sydney, Australia",
      image: assets.testimonial_image_1,
      content:
        "Highly recommended! The car was clean, comfortable, and exactly as described.",
      rating: 4,
    },
    {
      name: "Sarah Johnson",
      location: "Toronto, Canada",
      image: assets.testimonial_image_2,
      content:
        "Great experience! The car was well-maintained and delivery was on time.",
      rating: 5,
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Tittle
        title="What Our Users Say"
        subtitle="Discover why travellers choose us"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 rounded-lg bg-white shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(testimonial.rating)].map((_, starIndex) => (
                <img
                  key={starIndex}
                  src={assets.star_icon}
                  alt="star"
                  className="w-4 h-4"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-500 text-sm my-5">
              "{testimonial.content}"
            </p>

            <hr className="mb-5 border-gray-300" />

            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h3 className="font-medium text-gray-800">
                  {testimonial.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;