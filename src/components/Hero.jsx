import React, { useEffect, useState } from 'react';

const backgroundImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4dgKTq3dwF-EbT2iNS2pDm5RzKfmTF5oFw&s',
  'https://i.pinimg.com/736x/8e/ae/cf/8eaecfe96575a989908d2adc9d5df28a.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4dgKTq3dwF-EbT2iNS2pDm5RzKfmTF5oFw&s',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[80vh] sm:h-[90vh] bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content aligned to the left with 15% padding */}
      <div className="relative z-10 h-full flex items-center pl-[10%] pr-4">
        <div className="text-white max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to Awan Bongsu
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            We deliver top-notch solutions for your digital needs.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
