 import React from 'react'
 import { Link } from 'react-router-dom';
 
 export default function Footer() {
    return (
         <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">Anand Brothers</div>
              <p className="text-gray-400">
                Leading medical diagnostics equipment for healthcare professionals worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Products</h3>
             <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/product/premier" className="hover:text-gray-100 transition-colors duration-200">
                  Premier Hb9210™
                </Link>
              </li>
              <li>
                <Link to="/product/bluediver" className="hover:text-gray-100 transition-colors duration-200">
                  Blue Diver
                </Link>
              </li>
              <li>
                <Link to="/product/fungitell" className="hover:text-gray-100 transition-colors duration-200">
                  Fungitell-Stat™
                </Link>
              </li>
            </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Information</h3>
              <ul className="space-y-2 text-gray-400">
                 <li>
                <Link to="/" className="hover:text-gray-100 transition-colors duration-200">
                  Home
                </Link>
              </li>
                 <li>
                <Link to="/product" className="hover:text-gray-100 transition-colors duration-200">
                  Product
                </Link>
              </li>
                 <li>
                <Link to="/featuredproduct" className="hover:text-gray-100 transition-colors duration-200">
                  Featured product
                </Link>
              </li>
                 <li>
                <Link to="/quick-order" className="hover:text-gray-100 transition-colors duration-200">
                  Quick Order
                </Link>
              </li>
               
               
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-gray-400">
                 <li>
                <Link to="/aboutus" className="hover:text-gray-100 transition-colors duration-200">
                  About Us
                </Link>
              </li>
                 <li>
                <Link to="/contactus" className="hover:text-gray-100 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
                 <li>
                <Link to="/careers" className="hover:text-gray-100 transition-colors duration-200">
                  Careers
                </Link>
              </li>
             
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-4 text-center text-gray-400">
            <p>&copy; 2025 Anand Brothers All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}

 