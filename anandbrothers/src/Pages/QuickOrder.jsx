import React, { useState } from 'react';

const QuickOrder = () => {
  const [fields, setFields] = useState([
    { id: 1, catalog: '', quantity: '' },
    { id: 2, catalog: '', quantity: '' },
    { id: 3, catalog: '', quantity: '' },
    { id: 4, catalog: '', quantity: '' },
    { id: 5, catalog: '', quantity: '' },
  ]);

  const handleInputChange = (id, fieldName, value) => {
    setFields(fields.map(field =>
      field.id === id ? { ...field, [fieldName]: value } : field
    ));
  };

  const addMoreFields = () => {
    const newId = Math.max(...fields.map(f => f.id)) + 1;
    setFields([...fields, { id: newId, catalog: '', quantity: '' }]);
  };

  const removeField = (id) => {
    if (fields.length > 1) {
      setFields(fields.filter(f => f.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending data to company email
    console.log('Order submitted:', fields);
    alert('Your order has been sent for processing!');
    // Reset form
    setFields([
      { id: 1, catalog: '', quantity: '' },
      { id: 2, catalog: '', quantity: '' },
      { id: 3, catalog: '', quantity: '' },
      { id: 4, catalog: '', quantity: '' },
      { id: 5, catalog: '', quantity: '' },
    ]);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-7 text-center">
          Quick Order
        </h1>
        
        {/* Underline decoration */}
        <div className="w-90 h-1 bg-blue-600 mx-auto mb-12"></div>

        {/* Tabs */}
        {/* <div className="flex border-b border-gray-800 mb-8 mx-auto"> */}
          {/* <button className="px-6 py-3 text-base font-medium text-gray-500 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-200 transition-colors">
            Bulk upload
          </button>
          <button className="px-6 py-3 text-base font-medium text-gray-500 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-200 transition-colors">
            Quote ID
          </button> */}
          {/* <button className="px-6 py-3 text-base font-medium text-blue-600 border-b-2 border-blue-600 rounded-t-md">
            Manual entry
          </button> */}
        {/* </div> */}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl border border-gray-200 p-8">
          {/* Column Headers */}
          <div className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-6">
              <label className="block text-md font-semibold text-gray-800 uppercase tracking-wide">
                Enter Product Catalog #
              </label>
            </div>
            <div className="col-span-5">
              <label className="block text-md font-semibold text-gray-800 uppercase tracking-wide">
                Quantity
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 ">
            {fields.map((field) => (
              <div key={field.id} className="grid grid-cols-12 gap-4 items-center ">
                <div className="col-span-6">
                  <input
                    type="text"
                    value={field.catalog}
                    onChange={(e) => handleInputChange(field.id, 'catalog', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm transition-colors"
                    placeholder=""
                  />
                </div>
                <div className="col-span-5">
                  <input
                    type="number"
                    value={field.quantity}
                    onChange={(e) => handleInputChange(field.id, 'quantity', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm transition-colors"
                    placeholder=""
                  />
                </div>
                <div className="col-span-1 flex justify-center">
                  <button
                    type="button"
                    onClick={() => removeField(field.id)}
                    className="w-6 h-6 flex items-center justify-center text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full transition-colors"
                  >
                   <svg className="w-5 h-5 text-gray-600 hover:text-blue-600 transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                   </svg>

                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add More Fields Button */}
          <div className="mt-7">
            <button
              type="button"
              onClick={addMoreFields}
              className="text-blue-600 hover:text-blue-800 text-md font-medium underline transition-colors"
            >
              Add more fields
            </button>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition ease-in-out duration-300 hover:scale-103"
            >
              Add items to cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickOrder;