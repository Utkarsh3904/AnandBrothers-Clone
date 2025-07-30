import React, { useState, useEffect } from 'react';

const Product = () => {
  const [activeSection, setActiveSection] = useState(0);

  const categories = [
    {
      id: 'life-science',
      title: 'Life Science',
      products: [
        {
          name: 'Protein Analysis',
          description: 'Advanced protein research and analysis solutions for comprehensive protein characterization.\nPurification and quantification tools for modern laboratory applications.'
        },
        {
          name: 'Cell Biology',
          description: 'Comprehensive cell culture systems and imaging solutions for cellular research.\nModern tools for cell analysis and biological research applications.'
        },
        {
          name: 'Molecular Biology',
          description: 'PCR, qPCR, and molecular diagnostic tools for genetic analysis.\nComplete solutions for molecular research and diagnostic applications.'
        }
      ]
    },
    {
      id: 'clinical-diagnostics',
      title: 'Clinical Diagnostics',
      products: [
        {
          name: 'Immunoassay',
          description: 'ELISA and immunoassay diagnostic solutions for clinical laboratory testing.\nPrecision instruments for accurate diagnostic and research applications.'
        },
        {
          name: 'Hematology',
          description: 'Blood analysis and hematology instruments for complete blood count.\nAdvanced cellular analysis systems for clinical laboratory environments.'
        },
        {
          name: 'Clinical Chemistry',
          description: 'Clinical chemistry analyzers and reagents for comprehensive metabolic panels.\nDiagnostic testing solutions for accurate clinical laboratory results.'
        }
      ]
    },
    {
      id: 'quality-controls',
      title: 'Quality Controls',
      products: [
        {
          name: 'Internal Controls',
          description: 'Quality control materials and standards for laboratory testing accuracy.\nPrecision validation tools for consistent laboratory performance and reliability.'
        },
        {
          name: 'External Controls',
          description: 'Proficiency testing programs and external QC solutions for quality assurance.\nComprehensive quality management systems for laboratory excellence and compliance.'
        },
        {
          name: 'Calibrators',
          description: 'Precision calibration standards for instrument calibration procedures.\nMethod validation tools ensuring accurate and reliable laboratory measurements.'
        }
      ]
    },
    {
      id: 'food-testing',
      title: 'Food & Beverage Testing',
      products: [
        {
          name: 'Pathogen Detection',
          description: 'Food safety and pathogen testing solutions for microbial contamination analysis.\nComprehensive testing systems ensuring food safety and regulatory compliance.'
        },
        {
          name: 'Allergen Testing',
          description: 'Food allergen detection and analysis kits for regulatory compliance.\nConsumer safety solutions with accurate allergen identification and quantification.'
        },
        {
          name: 'Contaminant Analysis',
          description: 'Chemical contaminant detection systems for food safety testing.\nQuality assurance tools for comprehensive food safety and contamination analysis.'
        }
      ]
    },
    {
      id: 'classroom-education',
      title: 'Classroom Education',
      products: [
        {
          name: 'Teaching Kits',
          description: 'Educational laboratory kits and materials for hands-on learning experiences.\nSpecially designed tools for academic settings and student engagement.'
        },
        {
          name: 'Curriculum Support',
          description: 'Comprehensive educational resources and support materials for science education.\nComplete teaching solutions for laboratory science curriculum development.'
        },
        {
          name: 'Student Experiments',
          description: 'Safe and engaging experimental protocols for student learning environments.\nEducational tools designed for effective hands-on science education.'
        }
      ]
    },
    {
      id: 'software-solutions',
      title: 'Software Solutions',
      products: [
        {
          name: 'Data Analysis',
          description: 'Laboratory data management and analysis software for efficient processing.\nAdvanced tools for data reporting and comprehensive laboratory information systems.'
        },
        {
          name: 'Workflow Management',
          description: 'Laboratory information management systems for streamlined operations.\nWorkflow optimization tools for enhanced laboratory efficiency and productivity.'
        },
        {
          name: 'Quality Management',
          description: 'Quality management software solutions for regulatory compliance.\nComprehensive quality assurance systems for laboratory excellence and standards.'
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

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header Section */}
      <div className="bg-blue-900 py-16 px-6">
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
      <div className="flex max-w-9xl bg-blue-50 shadow-lg min-h-screen ">
        {/* Fixed Left Sidebar */}
        <div className="w-80 bg-gray-50 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto">
          {/* Sticky Header - Fixed position within sidebar */}
          <div className="sticky top-0  bg-gray-50 z-20 p-8 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 ">
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
        <div className="flex-1">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.id}
              id={`section-${categoryIndex}`}
              className="category-section min-h-screen p-8"
            >
              {/* Category Header - Left Aligned */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">
                  {category.title}
                </h2>
               <div className="w-full h-1 bg-gray-700 rounded-full"></div>
                <p className="text-gray-600 mt-4 text-lg text-left">
                  Explore our {category.title.toLowerCase()} solutions designed for modern laboratory applications
                </p>
              </div>

              {/* Product Cards */}
              <div className="space-y-6">
                {category.products.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 hover:border-blue-800 group"
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-800 transition-colors duration-300 text-left">
                          {product.name}
                        </h3>
                        <div className="text-gray-600 leading-relaxed text-lg">
                          {product.description.split('\n').map((line, lineIndex) => (
                            <div key={lineIndex} className="mb-3 last:mb-0 flex items-start text-left">
                              <span className="text-blue-900 mr-3 mt-0 py-0 flex-shrink-0">•</span>
                              <span className="text-left">{line}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="ml-8 mt-8">
                        <button className="bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:scale-103">
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
  );
};

export default Product;