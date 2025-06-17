import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import FAQImage from "../../assets/Home/faq.png"; // Replace with your actual path

const faqs = [
  {
    id: 1,
    question: "How do I book an appointment?",
    answer:
      "Book salon appointments in under 60 seconds with the Pixalive app or website. Choose services, stylist, time, and pay securely—no calls needed!",
  },
  {
    id: 2,
    question: "Can I request a specific stylist?",
    answer: "Yes, you can request a preferred stylist at the time of booking.",
  },
  {
    id: 3,
    question: "What should I do at the salon after booking?",
    answer: "Just arrive at the scheduled time and check in at the front desk.",
  },
  {
    id: 4,
    question: "Can I reschedule or cancel my appointment?",
    answer: "Yes, go to your bookings section and you can manage appointments.",
  },
  {
    id: 5,
    question: "Do I need to pay in advance for my appointment?",
    answer: "You can either prepay online or pay at the salon after service.",
  },
];

const FaqSection = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className=" px-4 md:px-12 pt-12 pb-16">
      <div className=" mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-3xl font-meadium mb-10">
          Frequently Asked Questions
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Image */}
          <div>
            <img
              src={FAQImage}
              alt="FAQ"
              className="rounded-xl w-full object-cover"
            />
          </div>

          {/* Right Accordion */}
          <div className="space-y-7">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-gray-300 pb-4"
              >
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="flex gap-3 items-start">
                    <span className="text-gray-500 font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base font-medium text-gray-900">
                      {faq.question}
                    </p>
                  </div>
                  <div className="mt-1 bg-gray-200 hover:bg-gray-300 p-2 rounded">
                    {activeId === faq.id ? (
                        <FiMinus className="text-gray-600" />
                    ) : (
                        <FiPlus className="text-gray-600" />
                    )}
                  </div>
                </div>

                {activeId === faq.id && faq.answer && (
                  <p className="text-sm text-gray-600 mt-3 ml-8 mr-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
