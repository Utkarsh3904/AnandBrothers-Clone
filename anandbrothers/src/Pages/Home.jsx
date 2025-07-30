
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {   Trophy, Briefcase, ShoppingCart, Users, Settings, Bell } from 'lucide-react';
import { Stethoscope, Dna, Microscope, Activity, Droplet, FlaskConical } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './Product';
import FeaturedProduct from './FeaturedProduct';
import myVideo from '../assets/myvideo.mp4';
import typhifast from '../assets/typhifast.png';
import Typhiwell from '../assets/Typhiwell.jpg';
import dnahelic from '../assets/dnahelic.jpg';
import bottomimage from '../assets/bottomimage.png';
import topimage from '../assets/topimage.png';


// MedicalProductCarousel component
const products = [
  {
    name: "FUNGITELL-STAT",
    img: "https://www.fungitell.com/assets2/Fungitell/cards/FungitellSTAT_product.jpg",
  },
  {
    name: "FUNGITELL Assay",
    img: "https://www.anandbros.com/images/fungitell.1.jpg",
  },
  {
    name: "Blue Driver",
    img: "https://www.anandbros.com/images/blue_diver1.png",
  },
  {
    name: "Clafast/Calprest",
    img: "https://imgs.search.brave.com/jsG32jUbrDtrHVtrR1xRjkHxyEID8rS7xnHabzprfqA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FscHJvdGVjdGlu/YS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMTEvaW1t/YWdpbmktY2FsZmFz/dC0wMS5qcGc",
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
    img: "https://imgs.search.brave.com/knLv12BfHJraBCwp1HvZO6bVT7nK0o7-bo_r9wnMwTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy1yeXQ5/MGhqeDBqL2ltYWdl/cy9zdGVuY2lsLzU5/MHg1OTAvcHJvZHVj/dHMvMzMxMzcvNDE3/MTMvMzIxODY1NTFf/YlhjbEN1UnZfNzQ2/ZDhhYmE5ZmNlMjUz/MWQyZGQ5N2Y3MTUy/MzAyY2VkMTdkMmU3/Ml9fMjIxOTEuMTY1/NTQ0ODM0Mi5qcGc_/Yz0x",
  },
  {
    name: "Premier Hb9210 TM",
    img: "https://imgs.search.brave.com/mLvsW5-OEUO-v2xk1AAcgwAdg5k_KRH1hqLHcORP_BA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWVuYXJpbmlkaWFn/bm9zdGljcy5jb20v/cG9ydGFscy8yMC9p/bW1hZ2luaV9wcm9k/b3R0aV9sYWJvcmF0/b3J5L1ByZW1pZXJI/YjkyMTBSZXNvbHV0/aW9uMC5qcGc",
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
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
};


const MedicalProductCarousel = () => {
  return (
    <div className="w-full mt-5  mb-3  mx-auto py-8 px-12">
      <Slider {...settings}>
        {products.map((product, idx) => (
          <div key={idx} className="px-2">
            <img
              src={product.img}
              alt={product.name}
              className="w-70 h-50 md:h-64 object-cover rounded-xl shadow-xl"
            />
            <h3 className="mt-4 text-center text-xl font-semibold">{product.name}</h3>
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
  <div className="flex flex-col lg:flex-row bg-blue-50 py-16 space-x-10 lg:space-x-1 px-4 lg:px-8">
    {/* Left Image */}
    <div className="relative w-200 h-44 pl-13 pt-20">
      <div className="relative w-2/5 h-[22rem] min-w-[350px] max-w-lg">
        {/* Top/Main image */}
        <img
          src={bottomimage}
          alt="Lab Hand"
          className="absolute top-0 left-0 w-4/5 h-56 md:w-full md:h-72 object-cover rounded-xl shadow-xl border-4 border-white z-20"
        />
        {/* Overlapping bottom image */}
        <img
          src={topimage}
          alt="Gloved hands with cassette"
          className="absolute top-0 left-0 w-4/5 h-56 md:w-full md:h-72 object-cover rounded-xl shadow-xl border-4 border-white z-20"
          style={{ transform: "translate(9rem, 9rem)" }} // adjust as needed
        />
      </div>
    </div>
    {/* Right Content */}
    <div className="w-full lg:w-[80%]  p-4 lg:p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:gap-8 h-full">
        {statsData.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-blue-50 rounded-lg p-1 "
            >
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-2 mx-auto">
                <IconComponent className="w-8 h-8 text-white " />
              </div>
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-1">
                  {stat.number}
                </h3>
                <h4 className="text-lg lg:text-xl font-semibold text-blue-900 mb-2 capitalize">
                  {stat.title}
                </h4>
                <p className="text-gray-700 font-medium text-md leading-relaxed">
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
      id: 1,
      title: "Analytical",
      icon: Stethoscope,
      description: "Primary and secondary antibodies for research applications",
    },
    {
      id: 2,
      title: "Autoimmunity",
      description: "Comprehensive autoimmune diagnostic solutions",
      icon: Dna,
    },
    {
      id: 3,
      title: "Microbiology",
      description: "Blood banking and transfusion medicine products",
      icon: Microscope,
    },
    {
      id: 4,
      title: "Endocrinology",
      description: "Cell sorting and analysis instrumentation",
      icon: Activity,
    },
    {
      id: 5,
      title: "Gastroenterology",
      description: "Protein purification and separation solutions",
      icon: Droplet,
    },
    {
      id: 6,
      title: "Instrumentation",
      description: "Next-generation digital PCR technology",
      icon: FlaskConical,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans space-x-10 mt-0">
      {/* Left Image Section */}
      <div className="lg:sticky top-0 w-full lg:w-[35%] h-[50vh] lg:h-screen bg-white flex items-center justify-center relative">
        <img
          src={dnahelic}
          alt="Scientific"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Categories Section */}
      <div className="w-full lg:w-[55%] p-5 lg:py-10 bg-blue-50">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5 mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-0 flex-1">
            Popular Product Categories
          </h2>
        </div>
        <div className="mx-auto mt-0 mb-8 w-full border-t-4 border-blue-900 rounded-full shadow-md"></div>

        <div className="flex flex-col border border-blue-100 rounded-xl overflow-hidden">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`group bg-white p-6 lg:p-8 flex items-center gap-5 cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:-translate-y-[1px] hover:shadow-md ${
                  index !== categories.length - 1 ? "border-b border-blue-100" : ""
                }`}
              >
                <div className="text-blue-800 group-hover:text-white transition-colors duration-300 flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-800 rounded-xl flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
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

        {/* Overlapping Container */}
        <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]  max-w-6xl bg-blue-900 text-white rounded-2xl shadow-black shadow-xl/60 px-4 sm:px-8 py-16  text-center ">
          <div className="space-y-10">
            <h1 className="text-3xl sm:text-6xl font-bold px-5"
            >
              Built on 40+ Years of Trusted Life Sciences Solutions
            </h1>
            <h2 className="text-lg sm:text-xl font-medium"
            style={{ fontFamily: "Author, sans-serif" }}>
              Advancing Discovery Across the Spectrum of Science.<br />
              Confidently advance your diagnostics, and knowledge, with us  in innovative products <br /> for life science research and clinical diagnostics.
            </h2>
            <Link to="/product">
            <button className="mt-4 px-8 py-4 bg-blue-900 border-2 border-white font-extrabold text-xl text-white shadow-2xl cursor-pointer rounded-lg hover:bg-white hover:text-blue-900 transition "
            style={{ fontFamily: "Author, sans-serif" }}>
              Find your Products
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-70 mb-30 mx-auto w-full max-w-9xl ">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 ">
          <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
          {/* Container */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 sm:gap-20">
            
            {/* Blue Box - Slightly visible at bottom-left */}
            <div className="absolute bottom-0 left-0 translate-x-[1rem] translate-y-[1rem] sm:translate-x-[4rem] sm:translate-y-[2.5rem] w-4/5 md:w-2/5 h-56 md:h-72 bg-blue-800 rounded-xl s z-10"></div>

            {/* Video - On top */} 
            <div className="relative z-20 w-4/5 md:w-2/5 h-56 md:h-72 rounded-xl overflow-hidden shadow-2xl">
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
              <div className="w-full sm:w-1/2  text-center sm:text-right space-y-8 sm:mt-5 mt-8">
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-center text-gray-900 sm:text-4xl">
                    Imagine Your Lab Doing <br /> More with Less
                  </h2>
                  <span className="hidden font-semibold text-center sm:block text-xl">
                    Backed by more than 14 years of ddPCR innovation and 12,000+ peer-reviewed publications, Bio-Rad is your partner in driving discoveries forward — one droplet at a time.
                  </span>
                  {/* Center button on small, right on sm and up */}
                  <div className="flex justify-center sm:justify-center">
                      <Link to="/featuredproduct">
                        <button className="inline-flex text-xl text-white items-center px-8 py-3.5  bg-blue-800 hover:bg-blue-700 rounded-xl font-semibold shadow-md cursor-pointer transition duration-300 hover:scale-103" >
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

<div className = "font-extrabold text-gray-900 text-5xl "
style={{ fontFamily: "Author, sans-serif" }}>Featured Products</div>

<div className="mx-auto mt-4 mb-8 w-100 border-t-4 border-blue-900 rounded-full shadow-md"></div>


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
      <div className="grid place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://img.freepik.com/free-vector/people-creating-social-media-landing-page_52683-38062.jpg?semt=ais_hybrid&w=740"
          alt="image2"
        />
      </div>

      {/* Title Section */}
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
    </>
  );
}
