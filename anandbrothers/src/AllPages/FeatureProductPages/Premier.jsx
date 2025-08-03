import React from 'react';
import premiertab from '../../assets/premiertab.jpg'
import { ChevronRight, Clock, Target, FlaskConical, Microscope, Activity, CheckCircle, Award, Zap, TrendingUp, Shield, Gauge } from "lucide-react";

const PremierHb9210 = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "Instrumentation", href: "/product#instrumentation" },
    { label: "Premier Hb9210™", current: true }
  ];

  const keyFeatures = [
    {
      icon: Award,
      title: "Patented Technology",
      description: "Boronate affinity methodology for accurate & precise results"
    },
    {
      icon: Clock,
      title: "Rapid Analysis",
      description: "Sample analysis in just 75 seconds with 48 tests per hour throughput"
    },
    {
      icon: Target,
      title: "Exceptional Precision",
      description: "Intra-run CVs below 2% guarantee reliable, repeatable results"
    },
    {
      icon: TrendingUp,
      title: "Wide Linearity",
      description: "From 3.8% HbA1c to 18.5% HbA1c ensures accuracy for whole diabetic population"
    },
    {
      icon: Shield,
      title: "Interference-Free",
      description: "Minimal interference from variants, interferents, matrix effects & sample freezing"
    },
    {
      icon: Gauge,
      title: "High Capacity",
      description: "210 patient samples capacity for medium & high throughput laboratories"
    }
  ];

  const boronateAdvantages = [
    "No interference from common and virtually all other hemoglobin variants",
    "No issue with reporting an unrequested genetic parameter",
    "Report HbA1c results with confidence",
    "Automated validation of the chromatography",
    "Eliminates operator intervention",
    "Removes subjective interpretation",
    "Allows automatic release to the LIS"
  ];

  const specifications = [
    { label: "Analysis Time", value: "75 seconds" },
    { label: "Throughput", value: "48 tests/hour" },
    { label: "Sample Capacity", value: "210 samples" },
    { label: "Precision", value: "Intra-run CVs <2%" },
    { label: "Linearity Range", value: "3.8% - 18.5% HbA1c" },
    { label: "Standards", value: "IFCC & NGSP certified" }
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
            Premier Hb9210™
          </h1>
          <p className="text-xl text-blue-100 mt-4 text-left">
            Patented boronate affinity HPLC system for accurate HbA1c testing
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Overview Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                    Revolutionary HbA1c Testing Platform
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-left mb-6">
                    Our patented boronate affinity methodology offers you accurate & precise results, virtually free from interference, in a rapid & highly scalable package. Delivering substantial workflow benefits, the platform is ideal for the most demanding laboratory & clinical environments.
                  </p>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-green-800 mb-2 text-left">Certified Standards</h4>
            <ul className="text-green-700 text-sm text-left space-y-1">
              <li>• IFCC (mmol HbA1c/mol Hb)</li>
              <li>• NGSP (% HbA1c)</li>
            </ul>
          </div>
                </div>
                <div className="relative">
                  <img
                    src={premiertab}
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

        {/* Boronate Affinity Advantage */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-white to-blue-100 rounded-xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-left">The Boronate Affinity Advantage</h3>
            <p className="text-gray-900 leading-relaxed text-left mb-4">
              The Premier Hb9210™ uses patented boronate affinity HPLC to detect all of the glycated 
              Hb species present. The final HbA1c result is determined from a simple peak area fraction.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2 text-left">Key Specifications</h3>
                <div className="space-y-1">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{spec.label}:</span>
                      <span className="font-medium text-blue-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
          </div>

          <div className="bg-white rounded-xl px-8 py-10  shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Unique Advantages</h3>
            <ul className="space-y-3">
              {boronateAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-md text-left">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Performance Metrics */}
      

        {/* Software & Connectivity */}
        

        {/* Contact Section */}
            <div className="bg-blue-900 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Premier Hb9210™ for Your Laboratory?</h3>
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

export default PremierHb9210;