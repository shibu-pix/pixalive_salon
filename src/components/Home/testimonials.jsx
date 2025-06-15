import React from "react";
import UserAvatar from "../../assets/Home/test.png"; // Replace with actual image path

const testimonials = [
  {
    rating: 4.5,
    text: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
    name: "Ananya R",
    role: "UI/UX Designer",
    avatar: UserAvatar,
  },
  {
    rating: 3.5,
    text: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
    name: "Ananya R",
    role: "UI/UX Designer",
    avatar: UserAvatar,
  },
  {
    rating: 4,
    text: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
    name: "Ananya R",
    role: "UI/UX Designer",
    avatar: UserAvatar,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex mb-4">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-black text-lg">★</span>
      ))}
      {halfStar && <span className="text-black text-lg">☆</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-black/20 text-lg">★</span>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className=" py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-3xl font-meadium text-gray-900 mb-10">
        Hear from our users
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-2xl p-6">
            {renderStars(t.rating)}
            <p className="text-gray-800 mb-6 text-sm leading-relaxed">"{t.text}"</p>
            <br /><br /><br />
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-6 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
