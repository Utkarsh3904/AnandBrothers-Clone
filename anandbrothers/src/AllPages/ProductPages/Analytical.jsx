import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const CustomProductPage = ({ 
  breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "Analytical", current: true }
  ],
  categoryTitle = "Analytical",
//   subCategoryTitle = "Controls",
  contentSections =
   [
  {
    id: 1,
    title: "Part No. 1000 - ClinRep® Complete Kit for Catecholamines in Plasma",
    description: "Neonatal Screening is an important preventive measure to detect severe irreversible damages caused by congenital metabolism disorders and endocrinopathies at a very early stage. One elementary integral part of the screening programme is the determination of the amino acids and acylcarnitines profile. The defects detected in these profiles are aminoacidopathies, fatty acid oxidation defects, carnitine cycle defects and organoacidemias.",
    hasDetailButton: false
  },
  {
    id: 2,
    title: "Part No. 8810 - Plasma Control. lyophil. Level I",
    description: " ",
    hasDetailButton: false
  },
  {
    id: 3,
    title: "Part No. 8811 - Plasma Control. lyophil. Level II",
    description: " ",
    hasDetailButton: false
  },
  {
    id: 4,
    title: "Part No. 8809 - Plasma Control. lyophil. Level I. II",
    description: " ",
    hasDetailButton: false
  },
  {
    id: 5,
    title: "Part No. 2000 - ClinRep® Complete Kit for Catecholamines in Urine",
    description: " ",
    hasDetailButton: false
  },
  {
    id: 6,
    title: "Part No. 8820 - Urine Control. lyophil. Level I (for Biogenic Amines)",
    description: " ",
    hasDetailButton: false
  },
  {
    id: 7,
    title: "Part No. 8821 - Urine Control. lyophil. Level II (for Biogenic Amines)",
    description: " ",
    hasDetailButton: false
  },
  {
    id: 8,
    title: "Part No. 8822 - Urine Control. lyophil. Level I. II",
    description: " ",
    hasDetailButton: false
  },
  {
    id: 9,
    title: "Part No. 4000 - ClinRep® Complete Kit for Metanephrines in Urine",
    description: " ",
    hasDetailButton: false
  },
  {
    id: 10,
    title: "Part No. 3000 - ClinRep® Complete Kit for VMA. HVA. 5-HIAA in Urine",
    description: " ",
    hasDetailButton: false
  }
]

}) => {
  const [activeSection, setActiveSection] = useState(null);

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
          
          {/* Category Title */}
          <h1 className="text-4xl font-bold text-white text-left">
            {categoryTitle} &gt;
             {/* {subCategoryTitle} */}
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {contentSections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-left">
                    {section.title}
                  </h3>
                  {section.description && (
                    <div className="text-gray-700 leading-relaxed text-left">
                      {section.description.split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-2 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                
                {section.hasDetailButton && (
                  <div className="ml-6 flex-shrink-0">
                    <button 
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
                      onClick={() => setActiveSection(section.id)}
                    >
                      Detail
                    </button>
                  </div>
                )}
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default CustomProductPage;