import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Microbiology = ({ 
  breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "Microbiology", current: true }
  ],
  categoryTitle = "Microbiology",
  //subCategoryTitle = "Controls",
  contentSections = [
  {
    id: 1,
    title: "Part No. TYP-100 M - TyphiPoint Typhoid Dot ELISA IgM Kit – 100 T",
    description: "",
    hasDetailButton: false
  },
  {
    id: 2,
    title: "Part No. TYP-100 G/M - TyphiPoint Typhoid Dot ELISA IgM and IgG Combi Kit – 100T",
    description: "",
    hasDetailButton: false
  },
  {
    id: 3,
    title: "Part No. TYW-96-M - TyphiWell Typhoid ELISA Kit – 96 T",
    description: "An Enzyme – Linked Immunosorbent Assay (ELISA) for the detection of IgM antibodies specific to Salmonella typhi in human serum/plasma FEATURES Able to run 96 samples at a time Break apart wells Detecting IgM for acute typhoid fever Total assay time 75 Minutes Unmasking IgM results in equivocal diagnosis of typhoid fever",
    hasDetailButton: false
  },
  {
    id: 4,
    title: "Part No. TYF-025 M - TyphiFast IgM Typhoid Rapid Card – 25 T",
    description: "Typhifast A rapid Immunochromatography test to detect specific lgm antibodies against Salmonella Typhi For Rapid Detection of Typhoid Features Convenient and easy to perform Detects lgM antibodies, indicating acute and middle phase of typhoid fever Built-in control to monitor proper test performance No major instrument required Shelf life of 18 months",
    hasDetailButton: false
  },
  {
    id: 5,
    title: "Part No. TYF-050G/M - TyphiFast IgG/IgM Typhoid Rapid Card – 50 T",
    description: "",
    hasDetailButton: false
  },
  {
    id: 6,
    title: "Part No. EBPCRCOV-02 - InnoExtractTM Rapid Extraction Buffer",
    description: "",
    hasDetailButton: false
  },
  {
    id: 7,
    title: "Part No. QPCRCOV-01 - InnoDetect One Step COVID-19 RT-PCR Kit - 100 T",
    description: "",
    hasDetailButton: false
  },
  {
    id: 8,
    title: "Part No. FT001 - Fungitell – Assay Kit",
    description: "The Fungitell® assay measures levels of (1→3)-ß-D-glucan in serum. The detection reagent is a biological cascade based upon modified Limulus Amebocyte Lysate (LAL), an extract of the blood cells of the North American Horseshoe Crab. The assay is based upon a modification of the LAL pathway. The Fungitell reagent is modified to eliminate Factor C and, thus bypassing the activated factor B, to only react to (1→3)-ß-D-glucan, through the Factor G-mediated side of the pathway. This renders the reagent highly specific for (1→3)-ß-D-glucan and does not react to other polysaccharides, including beta-glucans with different glycosidic linkages.",
    hasDetailButton: false
  },
  {
    id: 9,
    title: "Part No. CA961-10 - 96 well microplate certified to contain less than 0.005 EU/ml, a Pyroclear (R) product",
    description: "",
    hasDetailButton: false
  },
  {
    id: 10,
    title: "Part No. PPT10 - 1000ul, box of 8 racks, Total of 768 tips, a Pyroclear ® product",
    description: "",
    hasDetailButton: false
  },
  {
    id: 11,
    title: "Part No. PPT25 - 250ul, box of 10 racks, Total of 960 tips, a Pyroclear ® product",
    description: "",
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

export default Microbiology;