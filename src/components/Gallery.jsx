import React, { useState } from 'react';
import kamastu from '../assets/kamasthu.jpg';
import hitachi from '../assets/hitachi.webp';


const categories = ['All', 'Komatsu', 'Hitachi', 'Sumitomo', 'Kobelco', 'Doosan', 'Crawler Tractor', 'Mini Skid Loader'];

const galleryItems = [
  {
    src: kamastu,
    alt: 'Komatsu Excavator',
    category: 'Komatsu',
  },
  {
    src: hitachi,
    alt: 'Hitachi Excavator',
    category: 'Hitachi',
  },
  {
    src: kamastu,
    alt: 'Sumitomo Excavator',
    category: 'Sumitomo',
  },
  {
    src: hitachi,
    alt: 'Kobelco Excavator',
    category: 'Kobelco',
  },
  {
    src: kamastu,
    alt: 'Doosan Excavator',
    category: 'Doosan',
  },
  {
    src: hitachi,
    alt: 'Crawler Tractor',
    category: 'Crawler Tractor',
  },
  {
    src: kamastu,
    alt: 'Mini Skid Loader',
    category: 'Mini Skid Loader',
  },
  // Add more items as needed
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900">Gallery</h2>
        <p className="mt-4 text-lg text-gray-500">
          Explore our range of heavy machinery across various categories.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center mb-8 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
