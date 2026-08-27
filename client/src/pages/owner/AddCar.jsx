import React, { useState } from "react";
import Title from "../../components/owner/Title";
import { toast } from "react-hot-toast";
import { assets } from "../../assets/assets.js";
import { useAppContext } from "../../context/AppContext";

const AddCar = () => {
  const { axios , currency } = useAppContext();

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    if(isLoading) return null;
    if (!image) {
      toast.error("Please upload a car image");
      return;
    }
    setIsLoading(true);
    try{
      const formData = new FormData();
      formData.append('carData', JSON.stringify(car));
      formData.append('image', image);

      const { data } = await axios.post('/api/owner/add-car', formData) 
      if(data.success){
        toast.success(data.message);
        setImage(null);
        setCar({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",     
          
    })
  }else{
    toast.error(data.message);
    }
}
    catch (error) {
    toast.error(error.message);
    }
    finally{
      setIsLoading(false);
    } 
  
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subtitle="Fill in details to list a new car for booking, including its specifications, pricing, and availability."
      />
      <form
        onSubmit={onsubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* car image */}
        <div className="flex items-center w-full gap-2">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500 ">Upload a picture of your car</p>
        </div>
        {/* car brand and model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label>Brand</label>
            <input
              type="text"
              placeholder="Enter car brand"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Model</label>
            <input
              type="text"
              placeholder="Enter car model"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.model}
              onChange={(e) => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>

        {/* car year and price per day, category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              type="number"
              placeholder="2025,2024,2023..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.year}
              onChange={(e) => setCar({ ...car, year: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Daily Price ({currency})</label>
            <input
              type="number"
              placeholder="Enter daily price:10000.2000.3000..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.pricePerDay}
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Category</label>
            <select
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.category}
              onChange={(e) => setCar({ ...car, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
        </div>
        {/* transmission, fuel type, seating capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Transmission</label>
            <select
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.transmission}
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
            >
              <option value="">Select transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Fuel Type</label>
            <select
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.fuel_type}
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
            >
              <option value="">Select fuel type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              type="number"
              placeholder="Enter seating capacity: 2,4,5,7..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.seating_capacity}
              onChange={(e) =>
                setCar({ ...car, seating_capacity: e.target.value })
              }
            />
          </div>
        </div>
        {/* location and description */}
        <div className="flex flex-col w-full">
          <label>Location</label>
          <select
            placeholder="Enter car location"
            required
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            value={car.location}
            onChange={(e) => setCar({ ...car, location: e.target.value })}
          >
            <option value="">Select location</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Chitwan">Chitwan</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Lumbini">Lumbini</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
          rows="5"
            placeholder="Enter car description"
            required
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            value={car.description}
            onChange={(e) => setCar({ ...car, description: e.target.value })}
          ></textarea>
        </div>

        <button className="flex flex-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer">
          <img src={assets.tick_icon} alt="" />
          {isLoading ? "Loading..." : "List Your Car"}
        </button>
      </form>
    </div>
  );
};

export default AddCar;
