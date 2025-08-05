import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight, Clock, Target, FlaskConical, Microscope, Activity, CheckCircle } from "lucide-react";
import calfastkit from '../../assets/calfasttab.jpg';
import calprestKit from '../../assets/calfasttab.jpg';
import labTesting from '../../assets/lab-testing.jpg';

const Calfast = () => {
  const [activeTab, setActiveTab] = useState('calfast');

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "Gastroenterology", href: "/product#gastroenterology"},
    // { label: "Calfast", href: "/product#Calfast" },
    { label: "Calfast", current: true }
  ];

  const calfastFeatures = [
    {
      icon: Target,
      title: "Wide Range Detection",
      description: "Detects calprotectin in stool from 50-1005 mg/kg range"
    },
    {
      icon: Clock,
      title: "Rapid Results",
      description: "Provides quantitative results in just a few minutes"
    },
    {
      icon: FlaskConical,
      title: "Lateral Flow Technology",
      description: "Advanced lateral flow technology with dedicated reader"
    },
    {
      icon: CheckCircle,
      title: "Quality Controls",
      description: "Includes controls for effective internal quality control"
    }
  ];

  const calprestFeatures = [
    {
      icon: Microscope,
      title: "ELISA Technology",
      description: "Reference ELISA test for IBD diagnosis"
    },
    {
      icon: Target,
      title: "Extended Range",
      description: "Linearity range 0-3000 mg/kg with 6 calibrators"
    },
    {
      icon: Activity,
      title: "Room Temperature",
      description: "Incubation at room temperature, no shaking required"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Kit",
      description: "Includes 2 controls and all necessary reagents"
    }
  ];

  const applications = [
    "In vitro diagnosis of Inflammatory Bowel Disease (IBD)",
    "Follow-up and treatment monitoring of IBD patients",
    "Irritable Bowel Syndrome diagnosis",
    "Screening and surveillance of high-risk CRC patients",
    "Patient treatment follow-up without additional dilutions"
  ];

  const procedureSteps = [
    "Extraction and dilution of stool sample (final dilution 1:20000)",
    "Addition of calibrators, positive and negative controls, diluted extracted samples", 
    "60 minutes incubation at room temperature",
    "Washing step with diluted wash buffer",
    "Addition of conjugate",
    "30 minutes incubation at room temperature",
    "Second washing step with diluted wash buffer",
    "Addition of substrate",
    "30 minutes incubation at room temperature",
    "Reading at 450nm"
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
            Calfast & Calprest - Calprotectin Detection Systems
          </h1>
          <p className="text-xl text-blue-100 mt-4 text-left">
            Advanced diagnostic solutions for inflammatory bowel disease detection and monitoring
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Product Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('calfast')}
              className={`px-6 py-3 font-semibold text-lg transition-colors duration-300 border-b-2 ${
                activeTab === 'calfast' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Calfast XT
            </button>
            <button
              onClick={() => setActiveTab('calprest')}
              className={`px-6 py-3 font-semibold text-lg transition-colors duration-300 border-b-2 ${
                activeTab === 'calprest' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Calprest NG
            </button>
          </div>
        </div>

        {/* Calfast XT Content */}
        {activeTab === 'calfast' && (
          <div className="space-y-12">
            {/* Overview Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                  Calfast XT - Rapid Calprotectin Detection
                </h2>
                <p className="text-gray-700 leading-relaxed text-left mb-6">
                  The great experience gained in the development of Calprest and Calprest NG allowed Eurospital 
                  to contrive a new generation of rapid test comparable to the traditional ELISA assay. This innovative 
                  system can detect calprotectin in stool in a wide range (50-1005 mg/kg).
                </p>
                <p className="text-gray-700 leading-relaxed text-left">
                  Calprotectin concentration is sometimes very high and cannot be quantitatively detected by other kits. 
                  The Calfast XT wide range of quantification leads to the possibility to use it for patient treatment 
                  follow-up and to have quantitative results without additional dilutions.
                </p>
              </div>
              <div className="relative">
                <img
                  src={calfastkit}
                  alt="Calfast XT Device"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {calfastFeatures.map((feature, index) => {
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

            {/* How it Works */}
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900  text-left">How Calfast XT Works</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed text-left mb-4">
                    In a few minutes, Calfast XT provides faecal concentration of calprotectin using lateral flow 
                    technology applied to a support on which the sample is dispensed. The coloured band resulting 
                    in the card will be detected and quantified by a dedicated reader (Calfast Reader).
                  </p>
                  <p className="text-gray-700 leading-relaxed text-left">
                    The Calfast reader uses a lot-specific calibration curve to calculate the calprotectin concentration. 
                    The detectable range of calprotectin is between 15 and 100mg/kg, with results expressed according 
                    to standardized values.
                  </p>
                </div>
                <div>
                  <img
                    src={labTesting}
                    alt="Laboratory Testing Process"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calprest NG Content */}
        {activeTab === 'calprest' && (
          <div className="space-y-12">
            {/* Overview Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                  Calprest NG - Reference ELISA Test
                </h2>
                <p className="text-gray-700 leading-relaxed text-left mb-6">
                  The new reference ELISA test for the in vitro diagnosis of Inflammatory Bowel Disorders (IBD). 
                  A quantitative non-invasive method for the determination of calprotectin in stool by means of 
                  an extended calibration curve.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 text-left">Clinical Relevance</h4>
                  <p className="text-gray-700 text-sm text-left">
                    Crohn's disease (CD) and ulcerative colitis (UC) are chronic inflammatory bowel diseases (IBD) 
                    with unknown etiology. Their prevalence varies significantly, with approximately 40/100,000 for CD 
                    and 100/100,000 for UC.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={calprestKit}
                  alt="Calprest NG Kit"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Product Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {calprestFeatures.map((feature, index) => {
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

            {/* Procedure Section */}
            <div className="bg-gray-100 rounded-xl mb-8 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Procedure Outline</h3>
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
        )}

        {/* Applications Section */}
        <div className="bg-white rounded-xl p-8 mb-6 shadow-md">
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
              <h4 className="font-semibold text-gray-900 mb-3 text-left">About Calprotectin</h4>
              <p className="text-gray-700 text-sm leading-relaxed text-left">
                Calprotectin belongs to the group of Ca-binding proteins of the S100 family and is present in 
                large amounts in neutrophilic granulocytes, where it accounts for 5% of total proteins and 60% 
                of the proteins of the cytoplasmatic portion. The increase of faecal calprotectin appears to be 
                due to faecal excretion of neutrophils and macrophages migrated from the blood stream into the 
                intestinal lumen through the inflamed mucosa.
              </p>
            </div>
          </div>
        </div>

         {/* Contact Section */}
            <div className="bg-blue-900 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Calfast/Calprest for Your Laboratory?</h3>
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

export default Calfast;