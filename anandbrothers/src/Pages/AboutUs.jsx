import React from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';
import about5 from '../assets/about5.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900  to-blue-700 text-white py-20 px-8">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Anand Brothers</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Serving the diagnostic industry since 1978 with commitment to provide QUALITY & RELIABILITY in diagnostics
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Company Overview Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Journey</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  In this journey we have strived to continuously update our knowledge and today we work on various technology platforms like <span className="font-semibold text-blue-800">ELISA, RIA, HEMATOLOGY, IFA, HPLC, LC/MS & Molecular</span>. We are known in our market for bringing new products and technologies which can help diagnose diseases earlier and with better accuracy.
                </p>
                <p className="text-lg">
                  Our strong application and service support ensures customer satisfaction at all times. Our in-house training facilities are used to train the sales team on handling & troubleshooting different products & technologies for good customer support.
                </p>
                <p className="text-lg">
                  We represent several international companies with <span className="font-semibold text-blue-800">more than 1700 products</span> in our portfolio.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img 
                src={about4}
                alt="Advanced Laboratory Equipment" 
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
              <img 
                src={about5}
                alt="Medical Technology" 
                className="w-full h-48 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Customers Section */}
        <div className="mb-20 bg-white rounded-3xl shadow-2xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={about1}
                alt="Modern Medical Laboratory" 
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Customers</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'Hospitals',
                  'Referral Centers',
                  'Laboratories',
                  'Research Institutes',
                  'Medical Colleges',
                  'Veterinary Institutes'
                ].map((customer, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-xl border-b-3 border-blue-600">
                    <p className="font-semibold text-blue-800">{customer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl">
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-blue-800">ISO 9001 certified company</span>, and believes in continuous improvement, excellence in services & customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Training & Service Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Training & Service Excellence</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Our in-house training facilities are used to train the sales team on handling & troubleshooting different products & technologies for good customer support.
                  </p>
                  <p className="text-lg leading-relaxed">
                    The service centre is used for training engineers on installation and service training, ensuring our customers receive the highest level of technical support.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <img 
                src={about3}
                alt="Professional Training Environment" 
                className="w-full h-48 object-cover rounded-2xl shadow-xl"
              />
              <img 
                src={about2}
                alt="Medical Professional" 
                className="w-full h-40 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

         {/* Stats Section */}
        <div className="my-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-4xl font-bold text-blue-800 mb-2">1978</div>
            <p className="text-gray-600 font-medium">Established</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-4xl font-bold text-blue-800 mb-2">1700+</div>
            <p className="text-gray-600 font-medium">Products</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-4xl font-bold text-blue-800 mb-2">ISO</div>
            <p className="text-gray-600 font-medium">Certified</p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-4xl font-bold text-blue-800 mb-2">45+</div>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
        </div>

        {/* Quality Policy Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Quality Policy</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">
              Anand Brothers is engaged in the trading of life saving diagnostic kits & instruments. In this business we are committed to:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl border-t-4 border-blue-600">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Excellence in Services</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Achieve excellence in services & customer satisfaction through applying strategic directions to enhance business opportunities & minimize risk impacts.
                </p>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-2xl border-t-4 border-blue-600">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Regulatory Compliance</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Comply with regulatory & safety and applicable business & customer requirements at all times.
                </p>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-2xl border-t-4 border-blue-600">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Continuous Improvement</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Continually improving in all our activities including quality management system through setting and monitoring of business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default AboutUs;