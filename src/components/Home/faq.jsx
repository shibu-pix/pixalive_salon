import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import FAQImage from "../../assets/Home/faq.png"; // Adjust path if needed

const faqs = [
  {
    id: 1,
    question: 'How do I book an appointment?',
    answer:
      'Book salon appointments in under 60 seconds with the Pixalove app or website. Choose services, stylist, time, and pay securely—no calls needed!',
  },
  {
    id: 2,
    question: 'Can I request a specific stylist?',
    answer:
      'Absolutely. While booking you can filter by stylist. If your preferred professional is available, you’ll see their slot right away.',
  },
  {
    id: 3,
    question: 'What should I do at the salon after booking?',
    answer:
      'Just show the confirmation screen (or email) at the reception and relax—the staff will already have your details.',
  },
  {
    id: 4,
    question: 'Can I reschedule or cancel my appointment?',
    answer:
      'Yes. Head to “My Bookings” in the app or website, choose the appointment and tap “Reschedule” or “Cancel”. No extra fees if done 24 h in advance.',
  },
  {
    id: 5,
    question: 'Do I need to pay in advance for my appointment?',
    answer:
      'Most salons let you pay in person, but some premium slots require a token advance. You’ll see that clearly before checkout.',
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mx-auto px-4 md:px-12 py-14">
      <h2 className="text-2xl md:text-3xl font-medium mb-10 text-center md:text-left">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Fixed Image */}
        <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center">
          <img
            src={FAQImage}
            alt="FAQ"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right FAQs */}
        <div className="w-full md:w-1/2">
          <div className="space-y-12">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-300 pb-4">
                <div
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex items-start justify-between cursor-pointer"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500 font-medium">
                      {faq.id < 10 ? `0${faq.id}` : faq.id}
                    </span>
                    <p className="text-gray-800 font-medium">
                      {faq.question}
                    </p>
                  </div>
                  <div className="mt-1">
                    {openId === faq.id ? (
                      <FiMinus className="text-gray-500" />
                    ) : (
                      <FiPlus className="text-gray-500" />
                    )}
                  </div>
                </div>
                {openId === faq.id && faq.answer && (
                  <p className="mt-3 text-sm text-gray-600 pl-6 pr-4">
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

export default FAQSection;
