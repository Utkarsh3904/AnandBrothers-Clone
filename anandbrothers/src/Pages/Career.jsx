import React from 'react';

const Career = () => {
  return (
    <div className="min-h-screen  bg-blue-50"> 
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Careers</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join our team and build your future with Anand Brothers
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 bg-blue-50">
        {/* Intro */}
        <div className="space-y-12 mb-16 text-left">
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Career Options</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
Anand Brothers is a company with full of opportunities and exposure to learning. Being connected with us you can become more creative and dynamic.            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Life @ Anand Brothers</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Anand Brothers strives to provide an employee-friendly environment in which goal-oriented individuals thrive as they achieve ever more challenges that are demanding. Policies and working conditions provide a work environment in which both customer interests and employee interests are served.            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Anand Brothers?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Anand Brothers values the talents and abilities of employees and seeks to foster an open, cooperative, and dynamic environment in which employees and the company alike can thrive.            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Culture @ Anand Brothers</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
             Anand Brothers does not discriminate the employee on the basis of religion, age, gender, national origin, sexual orientation, race, or color which does not affect hiring, promotion, development opportunities, pay, or benefits. We encourage an employee to take initiatives and be committed towards their work.
            </p>
          </section>

          <p className="text-lg text-gray-700">
            Apply to current vacancies and be part of us at{' '}
            <a
              href="mailto:info@anandbros.com"
              className="text-blue-600 hover:text-blue-800 underline font-semibold"
            >
              info@anandbros.com
            </a>
          </p>
        </div>

        {/* Current Vacancies */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidde mb-4">
          <div className="bg-gradient-to-r from-blue-900  to-blue-700 rounded-lg text-white py-6 px-8">
            <h2 className="text-3xl font-bold">Current Vacancies</h2>
          </div>

          <div className="divide-y divide-gray-200 text-left">
            {/* Job 1 */}
            <div className="p-8 transition">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-blue-800">Area Sales Manager - Chennai HQ</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-2 text-gray-700">
                <div><strong> Location:</strong> Chennai</div>
                <div><strong> Department:</strong> Sales</div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong> Qualification:</strong> Graduate / Post Graduate in Science. <br />
                <strong> Experience:</strong> 2–5 years in marketing of diagnostic kits (immunoassay) / instrumentation / pharma.
              </p>
            </div>

            {/* Job 2 */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Sales Executive H.Q (Hyderabad)</h3>
              <p className="text-gray-700">
                <strong> Location:</strong> Hyderabad <br />
                <strong> Department:</strong> Sales
              </p>
            </div>

            {/* Job 3 */}
            <div className="p-8 ">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Sales Executive H.Q (Cochin)</h3>
              <p className="text-gray-700">
                <strong> Location:</strong> Cochin <br />
                <strong> Department:</strong> Sales
              </p>
            </div>

            {/* Job 4 */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Sales Executive (Kolkata)</h3>
              <p className="text-gray-700">
                <strong> Location:</strong> Kolkata <br />
                <strong> Department:</strong> Sales
              </p>
            </div>
          </div>

          {/* Final Apply Button */}
          {/* <div className="bg-blue-50 p-6 text-center"> */}
           
          </div>
           <a
              href="mailto:info@anandbros.com?subject=Job Application"
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-103 shadow-lg"
            >
              Apply Now
            </a>
        </div>
      </div>
    
  );
};

export default Career;
