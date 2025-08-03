import React, { useState, useEffect } from 'react';
import { Link,  useNavigate } from 'react-router-dom';

import calfast from '../assets/calfast.png';
import bluediver from '../assets/bluediver.png';
import paxview from '../assets/paxview.png';
import premier from '../assets/premier.png';
import fungitellstat from '../assets/fungitellstat.png';
import typhiwellbg from '../assets/typhiwellbg.png';
import fungitellstattab from '../assets/fungitellstattab.jpg';
import bluedivertabtab from '../assets/bluedivertabtab.jpg';
import paxviewtab from '../assets/paxviewtab.jpg';  
import calfasttab from '../assets/calfasttab.jpg';
import premiertab from '../assets/premiertab.jpg';



const FeaturedProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselItems = [
    {
      id: 1,
      image: bluediver,
      title: 'Blue Diver',
      subtitle: 'BlueDiver ANA25 Quantrix\nFirst Fully Quantitative ANA determination via micro Immunodot',
    },
    {
      id: 2,
      image: paxview,
      title: 'PaxView® TB/NTM MPCR-ULFA Kit',
      subtitle: 'Simultaneous detection of Mycobacterium tuberculosis and non-tuberculous mycobacteria',
    },
    {
      id: 3,
      image: fungitellstat,
      title: 'FUNGITELL-STAT',
      subtitle: 'Rapid diagnostic test detecting fungal infections by measuring (1→3)-β-D-glucan levels',
    },
    {
      id: 4,
      image: calfast,
      title: 'Calfast/Calprest',
      subtitle: 'Quantitative test for calprotectin to assess intestinal inflammation precisely',
    },
    {
      id: 5,
      image: typhiwellbg,
      title: 'Typhiwell',
      subtitle: 'Rapid immunoassay for detecting Salmonella Typhi IgG and IgM antibodies in serum',
    },
    {
      id: 6,
      image: premier,
      title: 'Premier Hb9210 TM',
      subtitle: 'Automated HPLC analyzer for precise HbA1c measurement in blood samples',
    }
  ];

  const product = [
    {
      id: 1,
      title: "Fungitell-Stat™",
      description: "Rapid diagnostic test detecting fungal infections by measuring (1→3)-β-D-glucan levels.",
      image: fungitellstattab,
      features: ["20,000 droplets per sample", "Absolute quantification", "No standard curves needed"],
      //price: "Contact for pricing",
      // category: "Digital PCR",
      badge: "Best Seller",
      PageUrl: '/product/fungitell'

      
    },
    {
      id: 2,
      title: "Blue Diver",
      description: "BlueDiver ANA25 Quantrix\nFirst Fully Quantitative ANA determination via micro Immunodot",
      image: bluedivertabtab,
      features: ["Enhanced stability", "Optimized performance", "Multiple formats available"],
      //price: "From $450",
      // category: "Reagents",
      badge: "New",
      PageUrl: '/product/bluediver'

    },
    {
      id: 3,
      title: "Calfast/Calprest",
      description: "Quantitative test for calprotectin to assess intestinal inflammation precisely",
      image: calfasttab,
      features: ["96-well format", "Automated operation", "Consistent droplet size"],
      //price: "Contact for pricing",
      // category: "Automation",
      badge: "Featured",
      PageUrl: '/product/calfast'
    },
    {
      id: 4,
      title: "PaxView® TB/NTM MPCR-ULFA ",
      description: "Simultaneous detection of Mycobacterium tuberculosis and non-tuberculous mycobacteria",
      image: paxviewtab,
      features: ["Expert designed", "Validated performance", "Quick setup"],
      //price: "From $280",
      // category: "Assays",
      badge: "Recommended",
      PageUrl: '/product/paxview'

    },
    {
      id: 5,
      title: "Premier Hb9210 TM",
      description: "Automated HPLC analyzer for precise HbA1c measurement in blood samples",
      image: premiertab,
      features: ["Statistical analysis", "Custom reporting", "Data visualization"],
      //price: "Included with system",
      // category: "Software",
      badge: "Updated",
      PageUrl: '/product/premier'

    },
    {
      id: 6,
      title: "Typhiwell",
      description: "Rapid immunoassay for detecting Salmonella Typhi IgG and IgM antibodies in serum",
      image: typhiwellbg,
      features: ["Statistical analysis", "Custom reporting", "Data visualization"],
      //price: "Included with system",
      // category: "Software",
      badge: "Updated",
      PageUrl: '/product/typhiwell'
      
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const navigate = useNavigate();

const handleNavigation = (url) => {
  navigate(url);
};

  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    const normalizedDiff = ((diff % carouselItems.length) + carouselItems.length) % carouselItems.length;
    if (normalizedDiff === 0) return 'translate-x-0 scale-130 z-30 opacity-100';
    if (normalizedDiff === 1) return 'translate-x-90 scale-80 z-20 opacity-60';
    if (normalizedDiff === carouselItems.length - 1) return '-translate-x-90 scale-80 z-20 opacity-60';
    if (normalizedDiff === 2) return 'translate-x-145 scale-70 z-10 opacity-10';
    if (normalizedDiff === carouselItems.length - 2) return '-translate-x-145 scale-70 z-10 opacity-10';
    return 'translate-x-0 scale-75 z-0 opacity-0 pointer-events-none';
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentSlide + i + carouselItems.length) % carouselItems.length;
      slides.push(index);
    }
    return slides;
  };

  const getBadgeColor = (badge) => {
    const colors = {
      "Best Seller": "bg-blue-600",
      "New": "bg-green-600",
      "Featured": "bg-purple-600",
      "Recommended": "bg-orange-600",
      "Updated": "bg-indigo-600"
    };
    return colors[badge] || "bg-gray-600";
  };

  return (
    <div className="w-full bg-blue-50">
      {/* Carousel Header */}
      <div className="relative z-40 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6">
          Featured Products
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our cutting-edge laboratory solutions designed for precision and innovation
        </p>
      </div>

      {/* Carousel */}
      <div className="relative z-30 h-96 flex items-center justify-center px-8 mb-1">
        <div className="relative w-full max-w-7xl h-80 flex items-center justify-center">
          {carouselItems.map((item, index) => {
            const isVisible = getVisibleSlides().includes(index);
            if (!isVisible) return null;
            return (
              <div
                key={item.id}
                className={`absolute transition-all duration-700 ease-out transform cursor-pointer ${getSlidePosition(index)}`}
                onClick={() => goToSlide(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-80 h-64 object-contain transition-all duration-700 hover:scale-105"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            );
          })}
        </div>

        <button onClick={prevSlide} className="absolute left-8 z-40 bg-white/80 border-1 rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition">
          ❮
        </button>
        <button onClick={nextSlide} className="absolute right-8 z-40 bg-white/80 border-1 rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition">
          ❯
        </button>
      </div>

      {/* Product Info */}
      <div className="text-center mb-12">
        <div className="bg-white rounded-3xl px-8 py-6 mx-auto max-w-2xl shadow-lg border border-white/50">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            {carouselItems[currentSlide].title}
          </h2>
          <p className="text-lg text-gray-600">
            {carouselItems[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center space-x-4 mb-16">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-blue-600' : 'w-3 bg-gray-300'
            }`}
          />
        ))}
      </div>
<div className="w-full border-t border-black mb-0 mt-12"></div>

      {/* Product Cards */}
      <div className="py-20 px-8 bg-blue-">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our advanced PCR systems and diagnostic tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition" />
                  <div className={`absolute top-4 left-4 ${getBadgeColor(item.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {item.badge}
                  </div>
                  {/* <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-md text-xs font-medium text-gray-600">
                    {item.category}
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between pt- border-t border-gray-100">
                    {/* <span className="text-lg font-bold text-blue-600">{item.price}</span> */}
                    <button
                       onClick={() => handleNavigation(item.PageUrl)}   //phle prodcut.pageurl tha
                     className="bg-blue-800 text-white px-30 py-3 cursor-pointer rounded-lg hover:bg-blue-700 mx-auto text-md font-medium">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
