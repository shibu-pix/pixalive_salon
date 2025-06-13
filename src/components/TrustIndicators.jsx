import React from 'react';
import { Phone, MessageCircle, Shield } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Phone,
      title: "Give us a call",
      description: "We're here to help you out with your booking"
    },
    {
      icon: MessageCircle,
      title: "24/7 customer support",
      description: "Get live answers via phone, when you need them"
    },
    {
      icon: Shield,
      title: "Privacy protection",
      description: "We use SSL encryption to keep your data secure"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-4">
                <indicator.icon size={24} className="text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{indicator.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;