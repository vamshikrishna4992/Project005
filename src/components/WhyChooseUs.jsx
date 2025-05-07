import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Extensive Inventory',
    description:
      'Awan Bongsu Sdn Bhd offers a wide range of used heavy machinery, particularly hydraulic excavators, ensuring that customers have access to a diverse selection of reliable equipment. Each machine is thoroughly inspected and refurbished to meet high-quality standards, providing peace of mind for buyers.',
  },
  {
    title: 'Expert Consultation',
    description:
      'The company prides itself on its knowledgeable team, which provides expert consultation to help clients select the right machinery for their specific needs. Awan Bongsu Sdn Bhd is committed to understanding customer requirements and offering tailored solutions, ensuring optimal performance and satisfaction.',
  },
  {
    title: 'Competitive Pricing',
    description:
      'Awan Bongsu Sdn Bhd offers competitive pricing on its used machinery, providing excellent value for money. By sourcing quality equipment at reasonable prices, the company helps clients maximize their investment while minimizing operational costs.',
  },
  {
    title: 'After-Sales Support',
    description:
      'Awan Bongsu Sdn Bhd is dedicated to customer satisfaction, offering robust after-sales support, including maintenance advice and assistance with spare parts. This commitment ensures that clients can rely on their machinery for the long term, enhancing productivity and reducing downtime.',
  },
];

const WhyChooseUs = () => {
    return (
      <section id="why-us" className="bg-[#f1f1f1] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-600 mb-12">
            Here are four strong reasons to work with Awan Bongsu Sdn Bhd.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#ff7f2a] p-6 pt-10 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
              >
                {/* Centered Check Icon */}
                <div className="flex justify-center items-center mb-4">
                  <CheckCircle className="text-white w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;

  