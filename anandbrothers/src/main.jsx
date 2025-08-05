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

import CustomProductPage from './AllPages/ProductPages/Hplckits';
import CustomProductPage from './AllPages/ProductPages/Lcmskits';
import CustomProductPage from './AllPages/ProductPages/Controls.jsx';
import CustomProductPage from './AllPages/ProductPages/Elisa';
import CustomProductPage from './AllPages/ProductPages/Ifa';
import CustomProductPage  from './AllPages/ProductPages/Immunodot';
import CustomProductPage  from './AllPages/ProductPages/AutoInstrumentation';
import CustomProductPage  from './AllPages/ProductPages/Typhoid';
import CustomProductPage  from './AllPages/ProductPages/Mycology';
import CustomProductPage  from './AllPages/ProductPages/InfectiousDisease';
import CustomProductPage  from './AllPages/ProductPages/Virology';
import CustomProductPage  from './AllPages/ProductPages/MolecularBiology';
import CustomProductPage  from './AllPages/ProductPages/FertilityandReproduction';
import CustomProductPage  from './AllPages/ProductPages/ThyroidFunction';

import CustomProductPage  from './AllPages/ProductPages/Analytical'
import CustomProductPage  from './AllPages/ProductPages/Autoimmunity'
import CustomProductPage  from './AllPages/ProductPages/Microbiology'
import CustomProductPage  from './AllPages/ProductPages/Endocrinology'
import CustomProductPage  from './AllPages/ProductPages/Gastroenterology'
import CustomProductPage  from './AllPages/ProductPages/Instrumentation'

import  Calfast from './AllPages/FeatureProductPages/Calfast'
import  BlueDiver from './AllPages/FeatureProductPages/BlueDiver'
import  Premier from './AllPages/FeatureProductPages/Premier'
import  Fungitell from './AllPages/FeatureProductPages/Fungitell'
import  Paxview from './AllPages/FeatureProductPages/Paxview'
import  Typhiwell from './AllPages/FeatureProductPages/Typhiwell'


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
      
      <Route path="/product/hplckits" element={<CustomProductPage/>} />
      <Route path="/product/lcmskits" element={<CustomProductPage/>} />
      <Route path="/product/controls" element={<CustomProductPage/>} />
      <Route path="/product/elisa" element={<CustomProductPage/>} />
      <Route path="/product/ifa" element={<CustomProductPage/>} />
      <Route path="/product/immunodot" element={<CustomProductPage/>} />
      <Route path="/product/autoinstrumentation" element={<CustomProductPage/>} />
      <Route path="/product/typhoid" element={<CustomProductPage/>} />
      <Route path="/product/mycology" element={<CustomProductPage/>} />
      <Route path="/product/infectiousdisease" element={<CustomProductPage/>} />
      <Route path="/product/virology" element={<CustomProductPage/>} />
      <Route path="/product/molecularbiology" element={<CustomProductPage />} />
      <Route path="/product/fertilityandreproduction" element={<CustomProductPage/>} />
      <Route path="/product/thyroidfunction" element={<CustomProductPage/>} />

      <Route path="/product/analytical" element={<CustomProductPage/>}/>
      <Route path="/product/autoimmunity" element={<CustomProductPage/>}/>
      <Route path="/product/microbiology" element={<CustomProductPage/>}/>
      <Route path="/product/endocrinology" element={<CustomProductPage/>}/>
      <Route path="/product/gastroenterology" element={<CustomProductPage/>}/>
      <Route path="/product/instrumentation" element={<CustomProductPage/>}/>

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