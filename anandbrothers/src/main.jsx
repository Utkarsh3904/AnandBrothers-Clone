import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Pages/Home';
import Product from './Pages/Product';
import FeaturedProduct from './Pages/FeaturedProduct';
import QuickOrder from './Pages/QuickOrder';
import Career from './Pages/Career';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';


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
import BlueDiver from './AllPages/FeatureProductPages/BlueDiver'
import Premier from './AllPages/FeatureProductPages/Premier'
import Fungitell from './AllPages/FeatureProductPages/Fungitell'
import Paxview from './AllPages/FeatureProductPages/Paxview'
import Typhiwell from './AllPages/FeatureProductPages/Typhiwell'


import {  Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />  
      <Route path='product' element={<Product />} />
      <Route path='featuredproduct' element={<FeaturedProduct />} />
      <Route path='quick-order' element={<QuickOrder />} />
      <Route path='careers' element={<Career />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='aboutus' element={<AboutUs />} />
      
      <Route path="/product/hplckits" element={<Hplckits />} />
      <Route path="/product/lcmskits" element={<Lcmskits/>} />
      <Route path="/product/controls" element={<Controls/>} />
      <Route path="/product/elisa" element={<Elisa/>} />
      <Route path="/product/ifa" element={<Ifa/>} />
      <Route path="/product/immunodot" element={<Immunodot/>} />
      <Route path="/product/autoinstrumentation" element={<AutoInstrumentation/>} />
      <Route path="/product/typhoid" element={<Typhoid/>} />
      <Route path="/product/mycology" element={<Mycology/>} />
      <Route path="/product/infectiousdisease" element={<InfectiousDisease/>} />
      <Route path="/product/virology" element={<Virology/>} />
      <Route path="/product/molecularbiology" element={<MolecularBiology />} />
      <Route path="/product/fertilityandreproduction" element={<FertilityandReproduction/>} />
      <Route path="/product/thyroidfunction" element={<ThyroidFunction/>} />

      <Route path="/product/analytical" element={<Analytical/>}/>
      <Route path="/product/autoimmunity" element={<Autoimmunity/>}/>
      <Route path="/product/microbiology" element={<Microbiology/>}/>
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
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
