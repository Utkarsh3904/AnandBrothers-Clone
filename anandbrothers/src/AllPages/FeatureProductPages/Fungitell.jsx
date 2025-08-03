import React from 'react';
import fungitelltab from '../../assets/fungitellstattab1.jpg';
import { ChevronRight, Clock, Target, FlaskConical, Microscope, Activity, CheckCircle, Award, Zap } from "lucide-react";

const Fungitell = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "Microbiology", href: "/product#microbiology" },
    { label: "Fungitell-Stat", current: true }
  ];

  const keyFeatures = [
    {
      icon: Award,
      title: "Gold Standard",
      description: "First and only FDA-cleared and CE marked rapid IVD screening for IFI"
    },
    {
      icon: Clock,
      title: "Rapid Results",
      description: "Highly sensitive diagnostic test in less than 1 hour"
    },
    {
      icon: Target,
      title: "Precise Detection",
      description: "Detects picogram levels of (1→3)-ß-D-glucan with 80 pg/mL cut-off"
    },
    {
      icon: Zap,
      title: "Single Sample Format",
      description: "No waiting for large sample batches - decreased turn-around time"
    },
    {
      icon: Microscope,
      title: "Broad Spectrum",
      description: "Detects glucan from most fungi including Candida, Aspergillus and Pneumocystis"
    },
    {
      icon: CheckCircle,
      title: "Early Detection",
      description: "Assists clinicians in identifying Invasive Fungal Disease early in disease process"
    }
  ];

  const clinicalBenefits = [
    "Rapid screening of Invasive Fungal Infection (IFI)",
    "Reliable cut-off values for accurate diagnosis",
    "Single sample format for immediate testing",
    "Small pack size for efficient laboratory workflow",
    "Early identification of Invasive Fungal Disease",
    "Supports timely therapeutic decisions"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Breadcrumb */}
      <div className="bg-blue-900 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="mb-8 text-left">
            <nav className="flex items-center space-x-2 text-lg font-semibold">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.current ? (
                    <span className="text-white text-xl font-bold">
                      {item.label}
                    </span>
                  ) : (
                    <a 
                      href={item.href}
                      className="text-white text-xl font-bold hover:text-blue-200 transition-colors duration-300 underline hover:no-underline"
                    >
                      {item.label}
                    </a>
                  )}
                  {index < breadcrumbItems.length - 1 && (
                    <ChevronRight className="text-white w-5 h-5 mx-1" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
          
          {/* Product Title */}
          <h1 className="text-4xl font-bold text-white text-left">
            Fungitell-Stat™
          </h1>
          <p className="text-xl text-blue-100 mt-4 text-left">
            Gold standard in rapid screening of invasive fungal infection (IFI)
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">

  {/* Overview Section */}

<div className="space-y-12">
            {/* Overview Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                  Revolutionary Fungal Infection Screening
                </h2>
                <p className="text-gray-700 leading-relaxed text-left mb-6">
                 FUNGITELL-STAT™ represents the gold standard in rapid screening of Invasive Fungal Infection (IFI). As the first and only single sample format, FDA-cleared and CE marked rapid IVD screening solution, it provides reliable cut-off values for accurate diagnosis.
                </p>
                <p className="text-gray-700 leading-relaxed text-left">
                  This highly sensitive diagnostic test delivers results in less than 1 hour, enabling clinicians to identify Invasive Fungal Disease (IFD) early in the disease process for timely therapeutic intervention.
                </p>
              </div>
              <div className="relative">
                <img
                  src={fungitelltab}
                  alt="BlueDiver ANA25 Quantrix Device"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
        </div>
    </div>
</div>

        {/* Key Features Section */}
        <div className="bg-white rounded-xl p-8 shadow-md mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-left">Key Features & Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex flex-col items-start space-y-3 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-left mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm text-left">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clinical Applications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Clinical Benefits</h3>
            <ul className="space-y-3">
              {clinicalBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-left">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Target Organisms</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-left">Candida Species</h4>
                <p className="text-gray-600 text-sm text-left">Comprehensive detection of various Candida species causing invasive infections</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-left">Aspergillus Species</h4>
                <p className="text-gray-600 text-sm text-left">Effective screening for Aspergillus-related invasive fungal diseases</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-left">Pneumocystis</h4>
                <p className="text-gray-600 text-sm text-left">Detection of Pneumocystis jirovecii infections</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Highlight */}
        <div className="bg-gradient-to-r from-white to-blue-100 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl text-gray-900 font-bold mb-4 text-left">Advanced Detection Technology</h3>
              <p className="text-gray-900 leading-relaxed text-left mb-4">
                FUNGITELL-STAT™ utilizes cutting-edge technology to detect picogram levels of (1→3)-ß-D-glucan 
                in serum samples using a single, reliable cut-off standard of 80 pg/mL.
              </p>
              <p className="text-gray-900 leading-relaxed text-left">
                This innovative approach eliminates the need for batch processing, significantly reducing 
                turn-around time and enabling immediate diagnostic decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3 text-left">Key Specifications</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Test Time:</span>
                    <span className="font-medium text-gray-800">Less than 1 hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cut-off Value:</span>
                    <span className="font-medium text-gray-800">80 pg/mL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sample Type:</span>
                    <span className="font-medium text-gray-800">Serum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Detection:</span>
                    <span className="font-medium text-gray-800">(1→3)-ß-D-glucan</span>
                  </div>
                </div>
              </div>
          </div>
        </div>

         {/* Contact Section */}
            <div className="bg-blue-900 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Fungitell-Stat™ for Your Laboratory?</h3>
                <p className="text-blue-100 mb-6">
                    Contact our team for more information about implementing Typhiwell in your diagnostic workflow
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/quick-order">
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                            Quick Order
                        </button>
                    </a>
                    <a href="/product">
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                            View All Products
                        </button>
                    </a>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Fungitell;