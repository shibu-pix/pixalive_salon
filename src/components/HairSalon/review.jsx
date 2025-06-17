import React from "react";
import { FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Image imports
import reviewerImg from "../../assets/HairSalon/review1.png";
import serviceImg from "../../assets/Hairsalon/review.png";

const reviews = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
  stars: 4.5,
  text:
    "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
  user: {
    name: "Ananya R",
    role: "UI/UX Designer",
    image: reviewerImg,
  },
  salon: {
    name: "The Aesthetic Studio",
    rating: 4.3,
    reviews: 32,
    location: "Electronic City, Bengaluru",
    image: serviceImg,
  },
}));

const TestimonialSection = () => {
  return (
    <div className="px-4 md:px-12 py-12">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-3xl font-medium text-gray-900 mb-1">
            Top reviews of Massage parlours near you in E-city
          </h2>
          <p className="text-sm text-gray-700 flex items-center gap-2">
            <FaStar className="text-black-500" />
            <span className="font-semibold">4.3</span> Average of{" "}
            <span className="font-medium">(32)</span> reviews of 14 venues
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200">
            <MdChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200">
            <MdChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow border border-gray-100 min-h-[350px]">
            {/* Review Content */}
            <div className="bg-gray-100 p-4 rounded-t-xl">
              <div className="flex mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`mr-1 ${
                      index < Math.floor(review.stars) ? "text-black-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div><br />
              <p className="text-sm text-gray-700 mb-4">{review.text}</p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <img
                  src={review.user.image}
                  alt={review.user.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-900">{review.user.name}</p>
                  <p className="text-xs text-gray-500">{review.user.role}</p>
                </div>
              </div>
            </div>

            {/* Salon Info */}
            <div className="flex items-center justify-between px-4 py-3 gap-x-6">
            <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                {review.salon.name}
                </p>
                <div className="flex items-center text-xs text-gray-600 mb-2">
                <FaStar className="text-black-500 mr-1" />
                {review.salon.rating}
                <span className="ml-1 text-blue-600 cursor-pointer">
                    ({review.salon.reviews})
                </span>
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                <GoLocation className="mr-1" />
                {review.salon.location}
                </div>
                <div className="text-xs text-blue-600 mt-1 cursor-pointer hover:underline">
                See all Services
                </div>
            </div>
            <img
                src={review.salon.image}
                alt="service"
                className="w-16 h-16 rounded-lg object-cover"
            />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
