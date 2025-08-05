import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';  // Adjust path if needed
import Home from './Pages/Home';  // Your Home page component
import Product from './Pages/Product'; // The Schedule page component
import FeaturedProduct from './Pages/FeaturedProduct'; // Featured Products page
import QuickOrder from './Pages/QuickOrder'; // Quick Order page
import Career from './Pages/Career'; // Career page
import ContactUs from './Pages/ContactUs'; // Contact Us page
import AboutUs from './Pages/AboutUs'; // About Us page

import Hplckits from './AllPages/ProductPages/Hplckits';
import Lcmskits from './AllPages/ProductPages/Lcmskits';
import Controls from './AllPages/ProductPages/Controls.jsx';
import Elisa from './AllPages/ProductPages/Elisa';
import Ifa from './AllPages/ProductPages/Ifa';
import Immunodot from './AllPages/ProductPages/Immunodot';
import AutoInstrumentation from './AllPages/ProductPages/AutoInstrumentation';
import Typhoid from './AllPages/ProductPages/Typhoid';
import Mycology from './AllPages/ProductPages/Mycology';
import InfectiousDisease from './AllPages/ProductPages/InfectiousDisease';
import Virology from './AllPages/ProductPages/Virology';
import MolecularBiology from './AllPages/ProductPages/MolecularBiology';
import FertilityandReproduction from './AllPages/ProductPages/FertilityandReproduction';
import ThyroidFunction from './AllPages/ProductPages/ThyroidFunction';

import Analytical from './AllPages/ProductPages/Analytical'
import Autoimmunity from './AllPages/ProductPages/Autoimmunity'
import Microbiology from './AllPages/ProductPages/Microbiology'
import Endocrinology from './AllPages/ProductPages/Endocrinology'
import Gastroenterology from './AllPages/ProductPages/Gastroenterology'
import Instrumentation from './AllPages/ProductPages/Instrumentation'

import Calfast from './AllPages/FeatureProductPages/Calfast'
import BlueDiver from './AllPages/FeatureProductPages/BlueDiver.jsx'
import Premier from './AllPages/FeatureProductPages/Premier.jsx'
import Fungitell from './AllPages/FeatureProductPages/Fungitell.jsx'
import Paxview from './AllPages/FeatureProductPages/Paxview.jsx'
import Typhiwell from './AllPages/FeatureProductPages/Typhiwell.jsx'



import './App.css';

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen m-0 p-0 bg-white">
        <Routes>
          {/* Layout wraps pages with header/sidebar/footer */}
          <Route path="/" element={<Layout />}>
            {/* Nested routes rendered inside Layout's <Outlet /> */}
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="featuredproduct" element={<FeaturedProduct />} />
            <Route path="quick-order" element={<QuickOrder />} />
            <Route path="career" element={<Career />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />

            <Route path="/product/hplckits" element={<Hplckits />} />
            <Route path="/product/lcmskits" element={<Lcmskits/>} />
            <Route path="/product/controls" element={<Controls/>} />
            <Route path="/product/elisa" element={<Elisa/>} />
            <Route path="/product/ifa" element={<Ifa/>} />
            <Route path="/product/immunodot" element={<Immunodot/>} />
            <Route path="/product/autoinstrumrntation" element={<AutoInstrumentation/>} />
            <Route path="/product/typhoid" element={<Typhoid/>} />
            <Route path="/product/mycology" element={<Mycology/>} />
            <Route path="/product/infectiousdisease" element={<InfectiousDisease/>} />
            <Route path="/product/virology" element={<Virology/>} />
            <Route path="/product/molecularbiology" element={<MolecularBiology />} />
            <Route path="/product/fertilityandreproduction" element={<FertilityandReproduction/>} />
            <Route path="/product/thyroidfunction" element={<ThyroidFunction/>} />

            <Route path="/product/analytical" element={<Analytical/>}/>
            <Route path="/product/autoimmunity" element={<Autoimmunity/>}/>
            <Route path="/product/microbiology" element={< Microbiology/>}/>
            <Route path="/product/endocrinology" element={<Endocrinology/>}/>
            <Route path="/product/gastroenterology" element={<Gastroenterology/>}/>
            <Route path="/product/instrumentation" element={<Instrumentation/>}/>

            <Route path="/product/calfast" element = {<Calfast/>}/>
            <Route path="/product/bluediver" element = {<BlueDiver/>}/>
            <Route path="/product/premier" element = {<Premier/>}/>
            <Route path="/product/fungitell" element = {<Fungitell/>}/>
            <Route path="/product/paxview" element = {<Paxview/>}/>
            <Route path="/product/typhiwell" element = {<Typhiwell/>}/>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
