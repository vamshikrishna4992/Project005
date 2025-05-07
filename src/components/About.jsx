import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://awanbongsu.com/wp-content/uploads/2024/11/m3.jpeg"
            alt="About Awan Bongsu"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Awan Bongsu Sdn Bhd is a leading supplier and importer of used heavy machinery, specializing in hydraulic excavators. Established with a commitment to providing high-quality machinery solutions, Awan Bongsu caters to a diverse range of industries, including construction, mining, and infrastructure development.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            With a focus on reliability and performance, Awan Bongsu sources a wide variety of hydraulic excavator products, ensuring that clients have access to the best equipment to meet their operational needs. The company prides itself on its extensive inventory, competitive pricing, and exceptional customer service, making it a trusted partner for businesses seeking durable and efficient machinery.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Located in Hulu Langat, Awan Bongsu serves both local and international markets, continually expanding its reach and capabilities. With a strong emphasis on quality assurance and customer satisfaction, Awan Bongsu Sdn Bhd stands out as a reliable choice for heavy machinery needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
