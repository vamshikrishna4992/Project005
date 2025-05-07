import React from 'react';

const services = [
  {
    title: 'Sales of Heavy Machinery',
    description:
      'Specializing in the sale of used heavy machinery, particularly hydraulic excavators. Services include inventory acquisition, sales and marketing, customer consultation, sales transactions, after-sales support, and market analysis.',
    image: 'https://awanbongsu.com/wp-content/uploads/2024/11/sales.jpeg',
  },
  {
    title: 'Activities of Holding Companies',
    description:
      'Overseeing and managing the strategic direction of subsidiaries within the heavy machinery sector. Activities encompass strategic management, financial oversight, investment and acquisition, risk management, resource allocation, performance monitoring, brand development, and corporate governance.',
    image: 'https://awanbongsu.com/wp-content/uploads/2024/11/Services.jpg',
  },
  // Add more services here as needed
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          Providing reliable heavy machinery solutions tailored to your needs.
        </p>
      </div>
      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            } items-center gap-8`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
