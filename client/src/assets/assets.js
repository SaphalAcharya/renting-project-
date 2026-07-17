import logo from "./logo.png";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"
import car_image5 from "./car_image5.png"
import car_image6 from "./car_image6.png"

export const cityList = ['Kathmandu', 'Pokhara', 'Chitwon', 'Butwol','Dang']

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4,
    car_image5,
    car_image6
    
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "GreatStack",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

export const dummyCarData = [
  {
    _id: "1",
    owner: "owner1",
    brand: "Toyota",
    model: "Land Cruiser Prado",
    image: car_image1,
    year: 2022,
    category: "SUV",
    seating_capacity: 7,
    fuel_type: "Diesel",
    transmission: "Automatic",
    pricePerDay: 10000,
    location: "Kathmandu",
    description:
      "Luxury SUV suitable for long-distance travel, family tours, and mountain roads.",
    isAvaliable: true,
    createdAt: "2025-06-01T10:00:00.000Z",
  },

  {
    _id: "2",
    owner: "owner1",
    brand: "Hyundai",
    model: "Creta",
    image: car_image2,
    year: 2023,
    category: "SUV",
    seating_capacity: 5,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 7500,
    location: "Pokhara",
    description:
      "Comfortable SUV ideal for city rides and highway journeys.",
    isAvaliable: true,
    createdAt: "2025-06-02T10:00:00.000Z",
  },

  {
    _id: "3",
    owner: "owner1",
    brand: "Mahindra",
    model: "Scorpio N",
    image: car_image3,
    year: 2024,
    category: "SUV",
    seating_capacity: 7,
    fuel_type: "Diesel",
    transmission: "Manual",
    pricePerDay: 9000,
    location: "Chitwan",
    description:
      "Powerful SUV suitable for off-road adventures and family trips.",
    isAvaliable: true,
    createdAt: "2025-06-03T10:00:00.000Z",
  },

  {
    _id: "4",
    owner: "owner1",
    brand: "Suzuki",
    model: "Swift",
    image: car_image4,
    year: 2023,
    category: "Hatchback",
    seating_capacity: 5,
    fuel_type: "Petrol",
    transmission: "Manual",
    pricePerDay: 3500,
    location: "Butwal",
    description:
      "Budget-friendly hatchback perfect for daily city travel.",
    isAvaliable: true,
    createdAt: "2025-06-04T10:00:00.000Z",
  },

  {
    _id: "5",
    owner: "owner1",
    brand: "Toyota",
    model: "Hiace",
    image: car_image5,
    year: 2022,
    category: "Van",
    seating_capacity: 14,
    fuel_type: "Diesel",
    transmission: "Manual",
    pricePerDay: 12000,
    location: "Kathmandu",
    description:
      "Spacious van for group tours, airport transfers, and business trips.",
    isAvaliable: true,
    createdAt: "2025-06-05T10:00:00.000Z",
  },

  {
    _id: "6",
    owner: "owner1",
    brand: "Tata",
    model: "Nexon EV",
    image: car_image6,
    year: 2024,
    category: "Electric SUV",
    seating_capacity: 5,
    fuel_type: "Electric",
    transmission: "Automatic",
    pricePerDay: 6000,
    location: "Dang",
    description:
      "Eco-friendly electric SUV with excellent city driving range.",
    isAvaliable: true,
    createdAt: "2025-06-06T10:00:00.000Z",
  },
];

export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 5440,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 3130,
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 2600,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 3440,
        "createdAt": "2025-06-10T09:44:25.410Z",
    }
]

export const dummyDashboardData = {
    "totalCars": 4,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 8400
}