import React from 'react';
import typhiwell from '../../assets/typhiwell.jpg'
import typhiwell1 from '../../assets/typhiwell1.jpg'
import { ChevronRight, Clock, Target, FlaskConical, Microscope, Activity, CheckCircle, Award, Zap, Users, Globe, AlertTriangle } from "lucide-react";

const Typhiwell = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/product" },
        { label: "Typhoid", href: "/product#microbiology" },
        { label: "Typhiwell", current: true }
    ];

    const keyFeatures = [
        {
            icon: Users,
            title: "High Throughput",
            description: "Able to run 96 samples at a time with break apart wells"
        },
        {
            icon: Target,
            title: "IgM Detection",
            description: "Specifically detects IgM antibodies for acute typhoid fever diagnosis"
        },
        {
            icon: Clock,
            title: "Rapid Testing",
            description: "Total assay time of just 75 minutes for quick results"
        },
        {
            icon: Microscope,
            title: "High Sensitivity",
            description: "96.8% sensitivity with 92.1% specificity for reliable diagnosis"
        },
        {
            icon: FlaskConical,
            title: "ELISA Platform",
            description: "Enzyme-Linked Immunosorbent Assay for standardized testing"
        },
        {
            icon: CheckCircle,
            title: "Minimal Sample",
            description: "Requires only 2 μl of human serum or plasma"
        }
    ];

    const productSpecs = [
        { label: "Method", value: "ELISA detection of IgM antibodies" },
        { label: "Sample Type", value: "Human serum or plasma" },
        { label: "Sample Volume", value: "2 μl" },
        { label: "Storage", value: "2-8°C" },
        { label: "Sensitivity", value: "96.8%" },
        { label: "Specificity", value: "92.1%" },
        { label: "Assay Time", value: "75 minutes" },
        { label: "Capacity", value: "96 samples" }
    ];

    const testPrinciple = [
        "Microwells coated with specific typhoid antigen",
        "Patient serum added after IgG interference removal",
        "IgM antibodies bind to antigen if present",
        "Unbound materials washed away",
        "Anti-human HRP conjugate added",
        "Complex visualized with TMB chromogen",
        "Stop solution converts blue to yellow color",
        "Results read by ELISA reader"
    ];

    const epidemiologyFacts = [
        "22 million new cases worldwide annually",
        "Approximately 200,000 deaths per year",
        "Endemic in Asia-Pacific region",
        "Common in Indian Sub-continent",
        "Prevalent in Africa and South America",
        "Transmitted by fecal-oral route"
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
                        Typhiwell
                    </h1>
                    <p className="text-xl text-blue-100 mt-4 text-left">
                        ELISA for detection of IgM antibodies specific to Salmonella typhi
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                
                {/* Overview Section */}
               <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
                    <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                        Advanced Typhoid Fever Diagnosis
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-left mb-6">
                        Typhiwell is an Enzyme-Linked Immunosorbent Assay (ELISA) designed for the detection of IgM antibodies specific to Salmonella typhi in human serum/plasma. This advanced diagnostic tool enables rapid and reliable identification of acute typhoid fever.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2 text-left">Clinical Significance</h4>
                <p className="text-green-700 text-sm text-left">
                    Unmasking IgM results provides equivocal diagnosis of typhoid fever, 
                    crucial for early detection and treatment in endemic areas.
                </p>
                </div>
                </div>
                    <div className="relative">
                    <img
                        src={typhiwell}
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
                                        <IconComponent className="w-6 h-6 text-blue-800" />
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

                {/* Performance & Specifications */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    

                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Complete Specifications</h3>
                        <div className="space-y-2   ">
                            {productSpecs.map((spec, index) => (
                                <div key={index} className="flex justify-between items-center  ">
                                    <span className="text-gray-600 text-sm font-medium">{spec.label}:</span>
                                    <span className="font-semibold text-gray-900">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative mt-5">
                    <img
                        src={typhiwell1}
                        alt="BlueDiver ANA25 Quantrix Device"
                        className="w-full h-80 object-cover  rounded-xl shadow-lg"
                    />
                    </div>

                </div>

                {/* Test Principle */}
               <div className="bg-blue-50 rounded-xl p-8 mb-12">
  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">
    Principle of the Test
  </h3>

  {/* Horizontal layout for both sections */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* Left: Principle content + Performance metrics */}
    <div>
      <p className="text-gray-700 leading-relaxed text-left mb-6">
        The test utilizes ELISA methodology with specific typhoid antigen-coated microwells. 
        Patient serum is processed to remove IgG interference and rheumatoid factor before testing.
      </p>

      {/* Performance Metrics box */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h4 className="text-2xl font-bold text-black mb-4 text-left">Performance Metrics</h4>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-4 border-l-4 border-blue-500 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">96.8%</div>
            <div className="text-sm text-black">Sensitivity</div>
          </div>
          <div className="bg-blue-50 p-4 border-l-4 border-blue-500 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">92.1%</div>
            <div className="text-sm text-black">Specificity</div>
          </div>
          <div className="bg-blue-50 p-4 border-l-4 border-blue-500 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">75</div>
            <div className="text-sm text-black">Minutes</div>
          </div>
          <div className="bg-blue-50 p-4 border-l-4 border-blue-600 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">96</div>
            <div className="text-sm text-black">Samples</div>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Testing Process */}
    <div>
      <h4 className="font-semibold text-2xl text-gray-900 mb-4 text-left">Testing Process</h4>
      <div className="space-y-4">
        {testPrinciple.map((step, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
              {index + 1}
            </div>
            <p className="text-gray-700 text-sm text-left">{step}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


        {/* Contact Section */}
            <div className="bg-blue-900 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Typhiwell for Your Laboratory?</h3>
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

export default Typhiwell;