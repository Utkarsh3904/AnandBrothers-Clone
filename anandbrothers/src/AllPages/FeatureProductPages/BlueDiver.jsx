import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight, Clock, Target, FlaskConical, Microscope, Activity, CheckCircle, Play } from "lucide-react";
import bluedivertab from '../../assets/bluedivertab.jpg';
import bluediverFeatures from '../../assets/blue1.jpg';
import bluediverApplication from '../../assets/about3.jpg';

const Bluediver = () => {
  const [activeTab, setActiveTab] = useState('ana25');

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "Autoimmunity", href: "/product#autoimmunity"},
    // { label: "Immunology", href: "/product#section=autoimmunity&tab=immunology" },
    { label: "BlueDiver", current: true }
  ];

  const ana25Features = [
    {
      icon: Target,
      title: "25 Autoantibodies Quantified",
      description: "Up to 25 autoantibodies quantified simultaneously with triplicate determination"
    },
    {
      icon: Clock,
      title: "1 Hour Results",
      description: "Time-effective processing with results obtained in just 1 hour"
    },
    {
      icon: FlaskConical,
      title: "Immunodot Technology",
      description: "First fully quantitative ANA determination via micro Immunodot technology"
    },
    {
      icon: CheckCircle,
      title: "High Accuracy",
      description: "Sensitivity and specificity: 94-100% for all antigens"
    }
  ];

  const instrumentFeatures = [
    {
      icon: Microscope,
      title: "Automated Processing",
      description: "Fully automated processing via BlueDiver Instrument with no pump liquid handling"
    },
    {
      icon: Target,
      title: "24 Sample Capacity",
      description: "Process 24 different samples on similar or completely different test strips"
    },
    {
      icon: Activity,
      title: "Compact Design",
      description: "Space-effective laboratory adapted automate with convenient size"
    },
    {
      icon: CheckCircle,
      title: "Ready-to-Use Reagents",
      description: "Individual cartridges with ready-to-use reagents for maximum convenience"
    }
  ];

  const applications = [
    "Autoimmune disease diagnosis and monitoring",
    "ANA (Antinuclear Antibodies) quantitative detection",
    "Connective tissue disorder screening",
    "Systemic lupus erythematosus (SLE) diagnosis",
    "Sjögren's syndrome detection",
    "Systemic sclerosis monitoring",
    "Mixed connective tissue disease evaluation"
  ];

  const procedureSteps = [
    "Load patient samples into the BlueDiver Instrument",
    "Insert appropriate test strips and reagent cartridges", 
    "Select test parameters via the integrated software",
    "Automated incubation and washing cycles",
    "Automated reagent dispensing and mixing",
    "Image capture and analysis via Dr. Dot Software",
    "Quantitative results calculation using calibration curve",
    "Quality control verification and report generation"
  ];

  const advantages = [
    "CE IVD compliant design meeting laboratory accreditation requirements",
    "Limited maintenance with no pumps or tubes to service",
    "Maximum flexibility for laboratory technicians",
    "Tremendous reduction in processing time",
    "Complete integrated calibration curve in each strip",
    "Multiple built-in reagent controls for quality assurance"
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
                    <Link 
                      to={item.href}
                      className="text-white text-xl font-bold hover:text-blue-200 transition-colors duration-300 underline hover:no-underline"
                    >
                      {item.label}
                    </Link>
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
            BlueDiver ANA25 Quantrix - Automated Immunodot System
          </h1>
          <p className="text-xl text-blue-100 mt-4 text-left">
            Fully automated processing for quantitative autoantibody determination
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Product Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('ana25')}
              className={`px-6 py-3 font-semibold text-lg transition-colors duration-300 border-b-2 ${
                activeTab === 'ana25' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              ANA25 Quantrix
            </button>
            <button
              onClick={() => setActiveTab('instrument')}
              className={`px-6 py-3 font-semibold text-lg transition-colors duration-300 border-b-2 ${
                activeTab === 'instrument' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              BlueDiver Instrument
            </button>
          </div>
        </div>

        {/* ANA25 Quantrix Content */}
        {activeTab === 'ana25' && (
          <div className="space-y-12">
            {/* Overview Section */}
            <div className="grid md:grid-cols-2 gap-20 items-center">
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
              <div className="relative ">
                <img
                  src={bluedivertab}
                  alt="BlueDiver ANA25 Quantrix Device"
                  className="w-120 h-80 object-fill rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {ana25Features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-left">{feature.title}</h4>
                        <p className="text-gray-600 text-left">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Performance Specifications */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Performance Specifications</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 text-left">Sensitivity</h4>
                      <p className="text-gray-700 text-left">94-100% for all antigens</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 text-left">Specificity</h4>
                      <p className="text-gray-700 text-left">94-100% for all antigens</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 text-left">Processing Time</h4>
                      <p className="text-gray-700 text-left">Results in 1 hour</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={bluediverFeatures}
                    alt="BlueDiver Test Features"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BlueDiver Instrument Content */}
        {activeTab === 'instrument' && (
          <div className="space-y-12">
            {/* Overview Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                  Automated Processing Excellence
                </h2>
                <p className="text-gray-700 leading-relaxed text-left mb-6">
                  The BlueDiver Instrument is the result of internal development to automate the BlueDiver 
                  Dot and BlueDiver Quantrix kits. This compact and innovative machine processes strips 
                  with ready-to-use reagents provided in individual cartridges.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 text-left">No Pump - No Liquid Handling</h4>
                  <p className="text-gray-700 text-sm text-left">
                    This innovative "no pump - no liquid handling" machine design presents many advantages 
                    including time-effectiveness, limited maintenance, and space-effectiveness.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={bluediverApplication}
                  alt="BlueDiver Instrument in Laboratory"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Instrument Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {instrumentFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-left">{feature.title}</h4>
                        <p className="text-gray-600 text-left">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

           {/* Advantages + Procedure Section */}
            <div className="flex flex-row flex-wrap gap-6 mb-6">
              {/* Advantages Section */}
              <div className="bg-gray-100 rounded-xl p-8 w-full md:w-[48%]">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">System Advantages</h3>
                <div className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <p className="text-gray-700 text-left">{advantage}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedure Section */}
              <div className="bg-blue-50 rounded-xl p-8 w-full md:w-[48%]">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Automated Procedure</h3>
                <div className="space-y-3">
                  {procedureSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-left">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

        </div>
        )}

        {/* Applications Section */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Clinical Applications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-left">Application Fields</h4>
              <ul className="space-y-2">
                {applications.map((application, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-left">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-gray-900 mb-3 text-left">CE IVD Compliance</h4>
              <p className="text-gray-700 text-md leading-relaxed text-left">
                The BlueDiver Instrument has been conceived to comply with the CE IVD recommendations 
                and major laboratory accreditation requirements, ensuring reliable and standardized 
                results for clinical laboratories worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-gray-100 rounded-xl p-8 m-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Product Demonstration</h3>
      <div className="relative aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-md"
          src="https://www.youtube.com/embed/MlAbfo4Or40?start=2"
          title="BlueDiver Product Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Optional Play Button Overlay – You can remove this if not needed */}
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
            <Play className="w-8 h-8 ml-1" />
          </div>
        </div> */}
      </div>
      <p className="text-gray-600 text-center mt-4">
        Watch the BlueDiver ANA25 Quantrix in action – See how automated processing delivers accurate results.
      </p>
    </div>

         {/* Contact Section */}
            <div className="bg-blue-900 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Blue Diver for Your Laboratory?</h3>
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

export default Bluediver;