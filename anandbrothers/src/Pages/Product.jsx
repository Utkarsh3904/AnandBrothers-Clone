import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import Hplckits from '../AllPages/ProductPages/Hplckits.jsx'; // Adjust the import path as needed

const Product = () => {
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();

  const categories = [
  {
    id: 'analytical',
    title: 'Analytical',
    categoryPageUrl: '/product/Analytical',
    products: [
      {
        name: 'HPLC Kits',
        description: 'High-performance kits for chromatography-based chemical compound separation.\nUsed in analytical labs for drug, toxin, or biomarker analysis.',
        productPageUrl: '/product/hplckits'
      },
      {
        name: 'LC/MS Kits',
        description: 'Liquid chromatography with mass spectrometry for molecular-level insights.\nDetects and quantifies analytes in complex biological diagnostic samples.',
        productPageUrl: '/product/lcmskits'
      },
      {
        name: 'Controls',
        description: 'Internal QC materials ensure accuracy in diagnostic test results.\nEssential for validation, consistency, and daily performance monitoring protocols.',
        productPageUrl: '/product/controls'
      }
    ]
  },
  {
    id: 'autoimmunity',
    title: 'Autoimmunity',
    categoryPageUrl: '/product/autoimmunity',
    products: [
      {
        name: 'ELISA',
        description: 'Immunoassay used for antibody, hormone or protein detection.\nCritical tool for autoimmune, infectious, and endocrine diagnostic tests.',
        productPageUrl: '/product/elisa'
      },
      {
        name: 'IFA',
        description: 'Indirect immunofluorescence detects specific autoantibodies in samples.\nEssential diagnostic tool for autoimmune and infectious disease screening.',
        productPageUrl: '/product/ifa'
      },
      {
        name: 'Immunodot',
        description: 'Dot-blot format for fast and efficient antibody detection.\nUsed for autoimmune disease, infection, and allergy diagnostics screening.',
        productPageUrl: '/product/immunodot'
      },
      {
        name: 'Instrumentation',
        description: 'Advanced instruments enable processing and interpretation of diagnostics.\nSupports automation, accuracy, and speed in clinical laboratory workflow.',
        productPageUrl: '/product/autoinstrumentation'
      }
    ]
  },
  {
    id: 'microbiology',
    title: 'Microbiology',
    categoryPageUrl: '/product/microbiology',
    products: [
      {
        name: 'Typhoid',
        description: 'Typhoid test kits detect Salmonella antibodies in patients.\nRapid detection helps early diagnosis and treatment of enteric fever.',
        productPageUrl: '/product/typhoid'
      },
      {
        name: 'Mycology',
        description: 'Detects fungal infections in human body or environment.\nSupports diagnosis of dermatophytosis, candidiasis, and systemic fungal infections.',
        productPageUrl: '/product/mycology'
      },
      {
        name: 'Infectious Disease',
        description: 'Covers tests for bacterial, viral, parasitic disease diagnostics.\nCritical for identifying pathogens and preventing healthcare-associated infections.',
        productPageUrl: '/product/infectiousdisease'
      },
      {
        name: 'Virology',
        description: 'Diagnostic tools for detecting viral infections like HIV, hepatitis.\nHelps monitor viral load and immune response post infection.',
        productPageUrl: '/product/virology'
      },
      {
        name: 'Molecular Biology',
        description: 'Techniques like PCR, RT-PCR for DNA/RNA-based detection.\nUsed in genetics, oncology, pathogen identification, and mutation analysis.',
        productPageUrl: '/product/molecularbiology'
      }
    ]
  },
  {
    id: 'endocrinology',
    title: 'Endocrinology',
    categoryPageUrl: '/product/endocrinology',
    products: [
      {
        name: 'ELISA',
        description: 'Detects hormonal levels like TSH, insulin, cortisol efficiently.\nKey tool in reproductive, thyroid, and adrenal disease assessment.',
        productPageUrl: '/product/fertilityandreproduction'
      },
      {
        name: 'RIA',
        description: 'Radioimmunoassay technique for hormone and antigen concentration detection.\nAccurate and sensitive method used in endocrinology test labs.',
        productPageUrl: '/product/thyroidfunction'
      },
    ]
  },
  {
    id: 'gastroenterology',
    title: 'Gastroenterology',
    categoryPageUrl: '/product/gastroenterology',
    products: [
      {
        name: 'Calfast',
        description: 'Calprotectin test kit for inflammatory bowel disease diagnostics.\nSupports differentiation between IBD and non-inflammatory gastrointestinal disorders.',
        productPageUrl: '/product/calfast'
      }
    ]
  },
  {
    id: 'instrumentation',
    title: 'Instrumentation',
    categoryPageUrl: '/product/instrumentation',
    products: [
      {
        name: 'Premier',
        description: 'Premier Hb9210TM analyzer for automated HbA1c testing.\nDelivers accurate and fast results in diabetes patient monitoring.',
        productPageUrl: '/product/premier'
      }
    ]
  }
];


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.category-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2; 

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    // Check URL hash on load for direct navigation
    const checkHash = () => {
      const hash = window.location.hash.substring(1); 
      const sectionIndex = categories.findIndex(cat => cat.id === hash);
      if (sectionIndex !== -1) {
        setTimeout(() => {
          scrollToSection(sectionIndex);
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', checkHash);
    checkHash(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const scrollToSection = (index) => {
    const section = document.querySelector(`#section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash
      window.history.pushState(null, null, `#${categories[index].id}`);
    }
  };

  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header Section */}    
      <div className="bg-gradient-to-r from-blue-900  to-blue-700 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product Categories
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mt-6">
            Discover our comprehensive range of laboratory and diagnostic solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex max-w-9xl bg-blue-50 shadow-lg min-h-screen">
        {/* Fixed Left Sidebar */}
        <div className="w-80 bg-blue-50 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto">
          {/* Sticky Header - Fixed position within sidebar */}
          <div className="sticky top-0 bg-blue-50 z-20 p-8 pb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Product Categories
            </h2>
          </div>
          
          {/* Scrollable Navigation */}
          <div className="p-8 pt-4">
            {/* Category Navigation with Vertical Line */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {/* Active Section Indicator */}
              <div 
                className="absolute left-0 w-0.5 bg-blue-600 transition-all duration-500 ease-in-out"
                style={{
                  top: `${activeSection * 48}px`,
                  height: '35px'
                }}
              ></div>

              {/* Category List */}
              <div className="space-y-6 pl-6">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(index)}
                    className={`block text-left transition-all duration-300 ${
                      activeSection === index
                        ? 'text-blue-600 font-semibold text-lg'
                        : 'text-gray-600 hover:text-gray-800 font-medium'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Right Content */}
        <div className="flex-1 flex-col">
          <div className="max-w-7xl mx-auto">
            {categories.map((category, categoryIndex) => (
              <div 
                className="category-section py-12 px-8 border-b border-gray-200 last:border-b-0"
                key={category.id}
                id={`section-${categoryIndex}`}
              >
                {/* Category Header - ID, Title, Button aligned in a row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-left">
                      {category.title}
                    </h2>
                  </div>
                  <button 
                    onClick={() => handleNavigation(category.categoryPageUrl)}
                    className="bg-gray-600 text-white px-6 py-3 mr-10 rounded-xl hover:bg-gray-500 transition-all cursor-pointer duration-300 font-medium shadow-md hover:shadow-lg hover:scale-105"
                  >
                    View More
                  </button> 
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full mb-4"></div>
                <p className="text-gray-600 mb-8 text-lg text-left">
                  Explore our {category.title.toLowerCase()} solutions designed for modern laboratory applications
                </p>

                {/* Product Cards */}
                <div className="space-y-6">
                  {category.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 hover:border-blue-800 group"
                    >
                      <div className="flex items-start">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300 text-left">
                            {product.name}
                          </h3>
                          <div className="text-gray-600 leading-relaxed text-lg">
                            {product.description.split('\n').map((line, lineIndex) => (
                              <div key={lineIndex} className="mb-2 last:mb-0 flex items-start text-left">
                                <span className="text-blue-900 mr-3 mt-1 flex-shrink-0">•</span>
                                <span className="text-left">{line}</span>
                              </div>
                            ))} 
                          </div>
                        </div>
                        <div className="ml-8 flex-shrink-0">
                          <button 
                            onClick={() => handleNavigation(product.productPageUrl)}
                            className="bg-blue-800 cursor-pointer text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:scale-105"
                          >
                            View Products
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;