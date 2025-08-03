import React from 'react';
import paxviewtab from '../../assets/paxviewtab.jpg';
import { ChevronRight, Clock, Target, FlaskConical, Microscope, Activity, CheckCircle, Award, Zap, Dna, Shield, Search } from "lucide-react";

const PaxViewTBNTM = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "PaxView® TB/NTM", current: true }
  ];

  const keyFeatures = [
    {
      icon: Dna,
      title: "Multiplex PCR Technology",
      description: "Advanced MPCR-ULFA (Multiplex PCR - Ultra-Fast Laboratory Assay) platform"
    },
    {
      icon: Target,
      title: "Dual Detection",
      description: "Simultaneous detection and differentiation of TB and NTM species"
    },
    {
      icon: Clock,
      title: "Ultra-Fast Results",
      description: "Rapid molecular detection with significantly reduced turnaround time"
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "Superior sensitivity and specificity for reliable tuberculosis diagnosis"
    },
    {
      icon: Microscope,
      title: "Laboratory Optimized",
      description: "Designed for high-throughput clinical laboratory environments"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Coverage",
      description: "Detects mycobacterium tuberculosis complex and non-tuberculous mycobacteria"
    }
  ];

  const clinicalApplications = [
    "Primary tuberculosis diagnosis",
    "Differentiation between TB and NTM infections",
    "Rapid screening in high-burden TB settings",
    "Treatment monitoring and follow-up",
    "Epidemiological surveillance programs",
    "Drug-resistant TB detection support"
  ];

  const technicalAdvantages = [
    {
      title: "Multiplex Detection",
      description: "Single test simultaneously identifies TB complex and NTM species",
      icon: Search
    },
    {
      title: "Ultra-Fast Processing",
      description: "ULFA technology delivers rapid results without compromising accuracy",
      icon: Zap
    },
    {
      title: "High Throughput",
      description: "Optimized for busy clinical laboratories with multiple sample processing",
      icon: Activity
    },
    {
      title: "Quality Assurance",
      description: "Built-in controls ensure reliable and reproducible results",
      icon: Award
    }
  ];

  const targetOrganisms = [
    {
      category: "Mycobacterium Tuberculosis Complex",
      organisms: [
        "M. tuberculosis",
        "M. bovis",
        "M. africanum",
        "M. microti",
        "M. canettii"
      ],
      color: "red"
    },
    {
      category: "Non-Tuberculous Mycobacteria (NTM)",
      organisms: [
        "M. avium complex",
        "M. kansasii",
        "M. fortuitum",
        "M. chelonae",
        "M. abscessus"
      ],
      color: "blue"
    }
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
            PaxView® TB/NTM MPCR-ULFA Kit
          </h1>
          <p className="text-xl text-blue-100 mt-4 text-left">
            Advanced multiplex PCR system for rapid TB and NTM detection
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Overview Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                          First Fully Quantitative ANA Determination
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-left mb-6">
                          The BlueDiver ANA25 Quantrix represents a breakthrough in autoantibody testing technology. 
                          This innovative system provides the first fully quantitative ANA determination via micro 
                          Immunodot technology, enabling simultaneous quantification of up to 25 autoantibodies.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-left">
                          With triplicate determination of each antigen and a complete integrated calibration curve 
                          in each strip, the system delivers fully quantitative results with exceptional accuracy 
                          and reliability for clinical laboratories.
                        </p>
                      </div>
                      <div className="relative">
                        <img
                          src={paxviewtab}
                          alt="BlueDiver ANA25 Quantrix Device"
                          className="w-full h-80 object-cover rounded-xl shadow-lg"
                        />
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
                    <IconComponent className="w-6 h-6 text-blue-700" />
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

        {/* Technical Advantages */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-white to-blue-100 rounded-xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-left">MPCR-ULFA Technology</h3>
            <p className="text-gray-900 leading-relaxed text-left mb-6">
              The Multiplex PCR - Ultra-Fast Laboratory Assay (MPCR-ULFA) platform combines the 
              specificity of molecular detection with unprecedented speed and efficiency.
            </p>
            <div className="space-y-4">
              {technicalAdvantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-white bg-opacity-20 rounded-lg p-2 flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-left">{advantage.title}</h4>
                      <p className="text-gray-900 text-sm text-left">{advantage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Clinical Applications</h3>
            <ul className="space-y-3">
              {clinicalApplications.map((application, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-left">{application}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2 text-left">Clinical Impact</h4>
              <p className="text-blue-700 text-sm text-left">
                Rapid differentiation between TB and NTM is crucial for appropriate treatment 
                selection and infection control measures in clinical settings.
              </p>
            </div>
          </div>
        </div>

       
        {/* Global TB Context */}
        <div className="bg-gradient-to-r from-white to-blue-100 rounded-xl p-8 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl text-gray-900 font-bold mb-4 text-left">Addressing Global TB Challenge</h3>
              <p className="text-gray-900 leading-relaxed text-left mb-4">
                Tuberculosis remains one of the world's leading infectious disease killers. 
                Rapid, accurate diagnosis is critical for effective treatment and prevention 
                of transmission in communities worldwide.
              </p>
              <p className="text-gray-900 leading-relaxed text-left">
                The PaxView® TB/NTM MPCR-ULFA Kit supports global TB control efforts by 
                providing laboratories with advanced molecular diagnostic capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-4 text-left">Key Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Technology:</span>
                    <span className="font-medium text-gray-800">MPCR-ULFA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Detection:</span>
                    <span className="font-medium text-gray-800">TB Complex & NTM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Platform:</span>
                    <span className="font-medium text-gray-800">Multiplex PCR</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Format:</span>
                    <span className="font-medium text-gray-800">Laboratory Kit</span>
                  </div>
                </div>
              </div>
              </div>
              </div>

         {/* Contact Section */}
            <div className="bg-blue-900 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need PaxView® TB/NTM MPCR-ULFA Kit for Your Laboratory?</h3>
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

export default PaxViewTBNTM;