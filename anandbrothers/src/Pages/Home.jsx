import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {   Trophy, Briefcase, ShoppingCart, Users, Settings, Bell } from 'lucide-react';
import { Stethoscope, Dna, Microscope, Activity, Droplet, FlaskConical } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Product from './Product';
// import FeaturedProduct from './FeatureProduct';
import myVideo from '../assets/myVideo.mp4';
import typhifast from '../assets/typhifast.png';
import Typhiwell from '../assets/typhiwell.jpg';
import dnahelix from '../assets/dnahelix.png';
import bottomimage from '../assets/bottomimage.png';
import topimage from '../assets/topimage.png';
import paxviewtab from '../assets/paxviewtab.jpg';
import premiertab from '../assets/premiertab.jpg';
import calfasttab from '../assets/calfasttab.jpg';
import bluedivertab from '../assets/bluedivertab.jpg';
import fungitellstatassaytab from '../assets/fungitellstatassaytab.jpg'


// MedicalProductCarousel component
const products = [
  {
    name: "FUNGITELL-STAT",
    img: "https://www.fungitell.com/assets2/Fungitell/cards/FungitellSTAT_product.jpg",
  },
  {
    name: "FUNGITELL Assay",
    img: fungitellstatassaytab,
  },
  {
    name: "Blue Driver",
    img: bluedivertab,
  },
  {
    name: "Clafast/Calprest",
    img : calfasttab,
 },
  {
    name: "Typhifast",
    img: typhifast,
  },
  {
    name: "Typhiwell",
    img: Typhiwell,
  },
  {
    name: "PaxView®TB MPCR-ULFA Kit",
    img : paxviewtab,
  },
  {
    name: "Premier Hb9210 TM",
    img : premiertab,
  },
];

const settings = {
  dots: false,            // Hide dots for continuous effect (optional)
  infinite: true,
  speed: 8000,            // 8000 ms for smooth slow scroll; increase for slower
  autoplay: true,
  autoplaySpeed: 0,       // No delay before new slide scroll starts
  cssEase: "linear",      // Important for smoothness
  slidesToShow: 4,        // Change as you desire, e.g. 4 or 5 for wide screen
  slidesToScroll: 1,
  arrows: false,          // Hide arrows for sleek look (optional)
  pauseOnHover: true,     // Pauses scrolling on hover
  responsive: [           // Adjust slides on different screen sizes
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }
    }
  ]
};


const MedicalProductCarousel = () => {
  return (
    <div className="w-full mt-5 mb-3 mx-auto py-4 sm:py-8 px-4 sm:px-12">
      <Slider {...settings}>
        {products.map((product, idx) => (
          <div key={idx} className="px-1 sm:px-2">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 sm:h-50 md:h-64 object-cover rounded-xl shadow-xl"
            />
            <h3 className="mt-2 sm:mt-4 text-center text-sm sm:text-xl font-semibold px-2">{product.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};


// Cards section
const CardsGrid = () => {
  const statsData = [
    {
      id: 1,
      icon: ShoppingCart,
      number: "1700+",
      title: "life saving products",
      description: "Anand Brothers is engaged in the trading of life saving diagnostic kits & instruments representing several international companies."
    },
    {
      id: 2,
      icon: Briefcase,
      number: "40+",
      title: "years in business",
      description: "We take pride in serving the diagnostic industry since 1978 on various technology platforms like ELISA, RIA, HEMATOLOGY, IFA, HPLC, LC/MS & Molecular."
    },
    {
      id: 3,
      icon: Users,
      number: "1000+",
      title: "clients across India",
      description: "We have strong in-house trained sales & service executives to support our elite customers include Hospitals, Laboratories, Research Institutes, etc"
    },
    {
      id: 4,
      icon: Trophy,
      number: "Best in class",
      title: "quality",
      description: "An ISO 9001 certified company, we comply with regulatory, safety & quality management systems throughout all our processes."
    }
  ];

return (
  <div className="flex flex-col lg:flex-row bg-blue-50 py-16 gap-y-45 sm:gap-y-2 px-4 lg:px-8">
    {/* Left Image */}
    <div className="relative w-full lg:w-200 lg:h-44 lg:pl-13 lg:pt-20 mb-12 sm:mb-16 lg:mb-0 flex justify-center lg:justify-start">
      <div className="relative w-full max-w-sm lg:w-2/5 lg:h-[22rem] lg:min-w-[350px] lg:max-w-lg">
        {/* Top/Main image */}
        <img
          src={bottomimage}
          alt="Lab Hand"
          className="absolute top-0 left-0 w-4/5 h-48 sm:h-56 md:h-72 lg:w-4/5 lg:h-56 md:lg:w-full md:lg:h-72 object-cover rounded-xl shadow-xl border-4 border-white z-20"
        />
        {/* Overlapping bottom image - Now visible on all devices with responsive positioning */}
        <img
          src={topimage}
          alt="Gloved hands with cassette"
          className="absolute top-0 left-0 w-4/5 h-48 sm:h-56 md:h-72 lg:w-4/5 lg:h-56 md:lg:w-full md:lg:h-72 object-cover rounded-xl shadow-xl border-4 border-white z-20"
          style={{ transform: "translate(4rem, 4rem)" }}
        />
      </div>
    </div>
    {/* Right Content - Added more top margin for mobile */}
    <div className="w-full lg:w-[80%] p-4 lg:p-4 mt-8 sm:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 h-full">
        {statsData.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-blue-50 rounded-lg p-1"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-800 rounded-full flex items-center justify-center mb-2 mx-auto">
                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-1">
                  {stat.number}
                </h3>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-800 mb-2 capitalize">
                  {stat.title}
                </h4>
                <p className="text-gray-700 font-medium text-sm sm:text-md leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
};

const PopularProductCategories = () => {
  const categories = [
    {
      id: 'analytical',
      title: "Analytical",
      icon: Stethoscope,
      description: "Primary and secondary antibodies for research applications",
    },
    {
      id: 'autoimmunity',
      title: "Autoimmunity",
      description: "Comprehensive autoimmune diagnostic solutions",
      icon: Dna,
    },
    {
      id: 'microbiology',
      title: "Microbiology",
      description: "Blood banking and transfusion medicine products",
      icon: Microscope,
    },
    {
      id: 'endocrinology',
      title: "Endocrinology",
      description: "Cell sorting and analysis instrumentation",
      icon: Activity,
    },
    {
      id: 'gastroenterology',
      title: "Gastroenterology",
      description: "Protein purification and separation solutions",
      icon: Droplet,
    },
    {
      id: 'instrumentation',
      title: "Instrumentation",
      description: "Next-generation digital PCR technology",
      icon: FlaskConical,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans space-x-0 lg:space-x-10 mt-0">
      {/* Left Image Section - Hidden on mobile, visible on lg+ with original positioning */}
      <div className=" hidden sm:block lg:sticky top-0 w-full lg:w-[35%] h-[50vh] lg:h-screen absolute inset-0 bg-gradient-to-r from-black/100 to-black/10 pointer-events-none items-center justify-center">
        <img
          src={dnahelix}
          alt="Scientific"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Categories Section */}
      <div className="w-full lg:w-[55%] p-5 lg:py-10 bg-blue-50">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0 flex-1 mx-auto text-center">
            Popular Product Categories
          </h2>
        </div>
<div className="mx-auto mt-4 mb-8 w-20 sm:w-32 lg:w-100 border-t-4 border-blue-900 rounded-full shadow-md"></div>

        <div className="flex flex-col border border-blue-100 rounded-xl overflow-hidden">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link 
                to={`/product#${category.id}`}
                key={category.id}
                className={`group bg-white p-4 sm:p-6 lg:p-8 flex items-center gap-3 sm:gap-5 cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:-translate-y-[1px] hover:shadow-md ${
                  index !== categories.length - 1 ? "border-b border-blue-100" : ""
                }`}
              >
                <div className="text-blue-800 group-hover:text-white transition-colors duration-300 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 group-hover:bg-blue-800 rounded-xl flex items-center justify-center">
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};


// Home component
export default function Home() {
  return (
    <>
      {/* Home Hero Section */}
      <div className="relative">
        {/* Background Image Section */}
        <div
          className="h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg')",
          }}
        ></div>

        {/* Overlapping Container - Mobile optimized */}
        <div className="absolute top-[85%] sm:top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] max-w-6xl bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl shadow-black shadow-xl/60 px-4 sm:px-8 py-8 sm:py-16 text-center">
          <div className="space-y-4 sm:space-y-10">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold px-2 sm:px-5"
            >
              Built on 40+ Years of Trusted Life Sciences Solutions
            </h1>
            <h2 className="text-sm sm:text-lg md:text-xl font-medium"
            style={{ fontFamily: "Author, sans-serif" }}>
              Advancing Discovery Across the Spectrum of Science.<br className="hidden sm:block" />
              <span className="block sm:inline">Confidently advance your diagnostics, and knowledge, with us in innovative products</span> <br className="hidden sm:block" />
              <span className="block sm:inline">for life science research and clinical diagnostics.</span>
            </h2>
            <Link to="/product">
            <button className="mt-4 px-4 sm:px-8 py-3 sm:py-4 bg-blue-800 border-2 border-white font-extrabold text-sm sm:text-xl text-white shadow-2xl cursor-pointer rounded-lg hover:bg-white hover:text-blue-900 transition"
            style={{ fontFamily: "Author, sans-serif" }}>
              Find your Products
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-16 sm:mt-20 lg:mt-70 mb-8 sm:mb-16 lg:mb-30 mx-auto w-full max-w-9xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
          {/* Container */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 sm:gap-20">
            
            {/* Blue Box - Slightly visible at bottom-left - Original desktop positioning */}
            <div className="absolute bottom-0 left-0 translate-x-[8rem] translate-y-[rem] sm:translate-x-[4rem] sm:translate-y-[2.5rem] w-4/5 md:w-2/5 h-56 md:h-72 bg-blue-800 rounded-xl z-10 hidden sm:block "></div>

            {/* Mobile Blue Box - Different positioning for mobile */}
            <div className="absolute-bottom-2 -right-4 w-full h-48 bg-blue-800 rounded-xl z-10 hidden sm:hidden"></div>

            {/* Video - On top */ }
            <div className="relative z-20  w-4/5 md:w-2/5 h-48 sm:h-56 md:h-72 rounded-xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline 
              >
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

              {/* Text + Button on Right */}
              <div className="w-full sm:w-1/2 text-center sm:text-right space-y-4 sm:space-y-8 sm:mt-5 mt-8">
                <div className="space-y-4 sm:space-y-8">
                  <h2 className="text-xl sm:text-4xl font-bold text-center text-gray-900">
                    Imagine Your Lab Doing <br /> More with Less
                  </h2>
                  <span className="hidden font-semibold text-center sm:block text-xl">
                    Backed by more than 14 years of ddPCR innovation and 12,000+ peer-reviewed publications, Bio-Rad is your partner in driving discoveries forward — one droplet at a time.
                  </span>
                  <span className="block font-semibold text-center sm:hidden text-base">
                    Backed by more than 14 years of ddPCR innovation and 12,000+ peer-reviewed publications, Bio-Rad is your partner in driving discoveries forward — one droplet at a time.
                  </span>
                  {/* Center button on small, right on sm and up */}
                  <div className="flex justify-center sm:justify-center">
                      <Link to="/featuredproduct">
                        <button className="inline-flex text-base sm:text-xl text-white items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-800 hover:bg-blue-700 rounded-xl font-semibold shadow-md cursor-pointer transition duration-300 hover:scale-102" >
                          Learn More
                        </button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

<div className="font-extrabold text-gray-900 text-2xl sm:text-3xl lg:text-5xl text-center px-4"
style={{ fontFamily: "Author, sans-serif" }}>Featured Products</div>

<div className="mx-auto mt-4 mb-8 w-20 sm:w-32 lg:w-100 border-t-4 border-blue-900 rounded-full shadow-md"></div>


      {/* MedicalProductCarousel Section */}
      <MedicalProductCarousel />

      {/* <div className="w-full border-t border-black mb-0 mt-12"></div>  */}

    {/* Cards Grid Section */}
    <CardsGrid />

<div className="w-full border-t border-black mb-0 mt-12"></div>

        {/* Popular Product Categories Section */}
        <PopularProductCategories />

        <div className="w-full border-t border-black mt-0 mb-12"></div>


      {/* Image Section */}
       <div className="bg-gradient-to-r from-blue-900 to to-blue-800 rounded-xl p-6 sm:p-8 mx-4 sm:mx-8 lg:mx-30 my-8 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Interested in the Products?</h3>
          <p className="text-blue-100 mb-6 text-sm sm:text-base">
            Contact our team for more information, pricing, or to schedule a demonstration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contactus">
              <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                Contact Us
              </button>
            </Link>
            <Link to="/aboutus">
              <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                About Us
              </button>
            </Link>
          </div>
        </div>

      
    </>
  );
}